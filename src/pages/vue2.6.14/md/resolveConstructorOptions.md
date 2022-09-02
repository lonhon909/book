# 解析默认配置 resolveConstructorOptions

```js
/**
 * 初始化选项合并，生成新的默认配置，根组件初始化，或者使用 Vue.extend 构建的子类以及子类 Sub.extend 构建的子类实例化时，都需要合并配置
 * @param { Vue } Ctor Vue构造函数
 */
export function resolveConstructorOptions (Ctor: Class<Component>) {
    // 默认配置在 initGlobalAPI 中定义 src\core\global-api\index.js
    let options = Ctor.options
    // Vue.extend 构建的子类或者子类 Sub.extend 构建的子类都有 super 属性，指向父类
    if (Ctor.super) {
        // 获取父类的默认配置，为啥有递归？是因为子类也可以使用 Sub.extend，这样就可能存在多级
        const superOptions = resolveConstructorOptions(Ctor.super)
        // Vue.extend 创建子类时，superOptions 是保存父类默认配置的引用，通常情况下，Sub.superOptions === Father.options，但是如果父类使用 mixin 则会改变自身的 options(另一个对象，内存地址不一样)
        const cachedSuperOptions = Ctor.superOptions
        // 对比默认配置是否已经改变，如果父类默认有改变，则子类也跟着变化（为什么要跟着变化？因为 Vue.mixin 是属于全局混入，如果不跟着变化，子类就无法获取mixin数据 ）
        /**
         * 为啥 Vue 默认配置会变化
         * 如：Vue.extend 后 Vue.mixin 改变父类的默认配置，这个时候就需要更新子类的配置
         * 
         *    const Vloading = Vue.extend({ ... }); // Vloading.superOptions 保留对父类默认配置（Vue.options）的引用
         *    Vue.mixin({ ... }); // Vue.mixin 会修改默认配置(Vue.options变化)，相对于 Vloading 来说，这里父类的默认配置就变化了
         *    new Vloading({ ... }); // 子类初始化时，需要获取上面 mixin 的数据就必须更新子类的配置
         */
        if (superOptions !== cachedSuperOptions) {
            // 更新子类的 superOptions
            Ctor.superOptions = superOptions
            // 提取 mixin 前后 options 的差异
            const modifiedOptions = resolveModifiedOptions(Ctor)
            if (modifiedOptions) {
                // extendOptions 是构建子类时 Vue.extend(extendOptions) 传入的配置，这里将差异合并到 extendOptions，这样子类多次实例化就只需要第一次合并即可
                extend(Ctor.extendOptions, modifiedOptions)
            }
            // 重新生成子类的 options，使用最新的父类默认配置 + Vue.extend创建子类时传入的配置（extendOptions）
            options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
            if (options.name) {
                // 注册组件，递归组件专用
                options.components[options.name] = Ctor
            }
        }
    }
    return options
}
/**
 * 子类也可能被混入 Vloading.mixin({...})，mixin后子类的 options 就会改变，这里提取 mixin 前后 options 的差异
 * @param {*} Ctor 
 * @returns 
 */
function resolveModifiedOptions (Ctor: Class<Component>): ?Object {
    let modified
    // Vloading.mixin({...}) 后会重新生成 Vloading.options
    const latest = Ctor.options
    // sealedOptions 为 Vloading.mixin 之前的 options -- src\core\global-api\extend.js
    const sealed = Ctor.sealedOptions
    for (const key in latest) {
        if (latest[key] !== sealed[key]) {
            if (!modified) modified = {}
            modified[key] = latest[key]
        }
    }
    return modified
}
```
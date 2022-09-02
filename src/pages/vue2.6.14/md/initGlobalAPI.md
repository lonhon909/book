# initGlobalAPI - 全局 API

+ <a href="#Vue_set">Vue.set</a>
+ <a href="#Vue_delete">Vue.delete</a>
+ <a href="#Vue_nextTick">Vue.nextTick</a>
+ <a href="#Vue_observable">Vue.observable</a>
+ <a href="#Vue_use">Vue.use</a>
+ <a href="#Vue_mixin">Vue.mixin</a>
+ <a href="#Vue_extend">Vue.extend</a>
+ <a href="#Vue_component">Vue.component</a>
+ <a href="#Vue_component">Vue.directive</a>
+ <a href="#Vue_component">Vue.filter</a>

```js
// src\core\index.js
import { initGlobalAPI } from './global-api/index'
...
// Vue 初始化之前会在 增加一些静态属性和方法
initGlobalAPI(Vue)
...
```

```js
function initGlobalAPI(Vue) {
    ...
    Vue.set = set
    Vue.delete = del
    Vue.nextTick = nextTick

    Vue.observable = (obj) => {
        observe(obj)
        return obj
    };

    // 默认的配置；Vue 初始化时会将默认的配置与传入的选项配置合并后再初始化
    Vue.options = Object.create(null);
    // ASSET_TYPES: ['component', 'directive', 'filter']
    ASSET_TYPES.forEach(type => {
        Vue.options[type + 's'] = Object.create(null)
    });
    // 暴露 Vue 自身
    Vue.options._base = Vue;
    // Vue.options.components = { keepAlive } 新增 keepAlive 组件，合并配置后全局都能使用 keep-alive 抽象组件了
    extend(Vue.options.components, builtInComponents);
    // 此时 Vue.options = { components: { keepAlive }, directives: {}, filters: {}, _base: Vue }

    // Vue.use 新增静态方法用于注册全局插件
    initUse(Vue)

    // Vue.mixin 用于全局 mixin
    initMixin(Vue)

    // Vue.extend 使用基础 Vue 构造器，创建一个 “子类”
    initExtend(Vue)

    // Vue.component（全局组件）、 Vue.directive（全局指令）、Vue.filter（全局过滤器）
    initAssetRegisters(Vue)
}
```

#### 1、<span id="Vue_use">Vue.use</span>
```js
// Vue.use 用于注册插件，内部使用缓存，重复注册直接返回缓存
function initUse(Vue) {
    /**
     * @param { Function | Object } 可接收函数或对象
     */
    Vue.use = function(plugin) {
        // 注册过的插件缓存在 Vue._installedPlugins 上，重复注册直接返回缓存
        const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
        // 已注册，则直接返回缓存
        if (installedPlugins.indexOf(plugin) > -1) {
            return this
        }

        const args = toArray(arguments, 1)
        args.unshift(this)
        if (typeof plugin.install === 'function') {
            // 调用对象上的 install 方法
            plugin.install.apply(plugin, args)
        } else if (typeof plugin === 'function') {
            // 如果入参是函数，则直接执行
            plugin.apply(null, args)
        }
        // 添加缓存
        installedPlugins.push(plugin)
        return this
    }
}
```

#### 2、<span id="Vue_mixin">Vue.mixin</span>
```js
function initMixin(Vue) {
    Vue.mixin = function (mixin: Object) {
        // Vue.mixin 会影响注册之后所有创建的每个 Vue 实例；原理时直接将 mixin 合并到默认配置 Vue.options 上，而默认配置会在 Vue 实例化时合并到最终配置
        this.options = mergeOptions(this.options, mixin)
        return this
    }
}
```

#### 3、<span id="Vue_extend">Vue.extend</span>
```js
function initExtend(Vue) {
    // 每个 Vue 或者 Vue.extend 子类、以及子类的子类 都有一个 cid
    Vue.cid = 0
    let cid = 1
    /**
     * @param { Object|Undefined } extendOptions 一个包含组件选项的对象
     */
    Vue.extend = function (extendOptions) {
        extendOptions = extendOptions || {}
        const Super = this // 指 Vue 类
        const SuperId = Super.cid // 每个 Vue.extend 创造的子类都有一个唯一的 cid，Vue 类本身也有
        // _Ctor 用于缓存子类
        const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})

        if (cachedCtors[SuperId]) {
            /**
             * 缓存，如果多次 Vue.extend(同一个选项对象)，返回缓存，通过 cid 区分
             * 为啥不直接使用 extendOptions._Ctor = Sub，而要使用 cid 区分？
             * 
             * 主要是 Vue.mixin 搞鬼，VueA 与 VueB 实例化取的的 a 不一样，如果使用 extendOptions._Ctor = Sub，则会出现 VueA === VueB，实例化取值相同，这显然不符合实际需求
             * const VueA = Vue.extend(obj);
             * const VueB = VueA.extend(obj);
             * VueA.mixin({
             *    data() {
             *       return {
             *          a: 'A'
             *       }
             *    }
             * })
             * VueB.mixin({
             *    data() {
             *        return {
             *            a: 'B'
             *        }
             *    }
             * })
             */
            return cachedCtors[SuperId]
        }

        // 校验组件 name 是否合法，一些内置的关键字 如：component，或者 html5 标签名均不被允许
        const name = extendOptions.name || Super.options.name
        if (process.env.NODE_ENV !== 'production' && name) {
            validateComponentName(name)
        }

        // Vue.extend 构建子类
        const Sub = function VueComponent (options) {
            this._init(options)
        }
        // 经典继承
        Sub.prototype = Object.create(Super.prototype)
        Sub.prototype.constructor = Sub
        Sub.cid = cid++
        // 合并父类的默认配置项与 option 作为子类自己的 option
        Sub.options = mergeOptions(
            Super.options,
            extendOptions
        )
        // 指向父类
        Sub['super'] = Super

        /**
         * props 与 computed 属性最终需要代理到 vm 上，通过 vm.xxx 访问
         * Vue.extend 创建的子类多次实例化时，每个实例都需要将属性代理到 vm 上
         * 这里通过优化在实例化之前先将 props、computed 的属性放到原型上，这样子类实例化时，vm 上就会存在该属性，属于性能优化
         * 在 _init 中处理 props 与 computed 时就不用代理 已存在 vm 上的这些属性
         * 
         * src\core\instance\state.js 在 initProps 中代理 props 时就只代理 vm 上不存在的属性
         */
        if (Sub.options.props) {
            initProps(Sub)
        }
        if (Sub.options.computed) {
            initComputed(Sub)
        }

        // 静态属性无法继承，需要重新赋值
        Sub.extend = Super.extend
        Sub.mixin = Super.mixin
        Sub.use = Super.use

        // ASSET_TYPES: ['component', 'directive', 'filter'] 静态属性无法继承，需要重新赋值
        ASSET_TYPES.forEach(function (type) {
            Sub[type] = Super[type]
        })
        if (name) {
            // 组件递归
            Sub.options.components[name] = Sub
        }

        /**
         * 保存父类的 options，主要用于子类实例化时判断 父类默认配置是否有变化
         * 如：Vue.extend 后 Vue.mixin 改变父类的默认配置，这个时候就需要更新子类的配置
         *    const Vloading = Vue.extend({ ... });
         *    Vue.mixin({ ... });
         *    new Vloading({ ... });
         */
        Sub.superOptions = Super.options
        Sub.extendOptions = extendOptions
        Sub.sealedOptions = extend({}, Sub.options)

        // 缓存
        cachedCtors[SuperId] = Sub
        return Sub
    }
}
```

#### 4、<span id="Vue_component">Vue.component & Vue.directive & Vue.filter</span>

注册全局组件、指令、过滤器，就是在初始化前，将组件|指令|过滤器加入到`Vue.options`中，`Vue`会在初始化时合并`options`到最终的选项配置，这样配置中就会包含这些信息

+ `Vue.component` 注册全局组件，校验组件名称，使用 `Vue.extend` 构建子类，并将子类加入到 `Vue.options.components` 中
+ `Vue.directive` 注册全局指令，创建指令选项 { bind: xxx, update: xxx }，并加入 `Vue.options.directives` 中
+ `Vue.filter` 注册全局过滤器，直接加入 `Vue.options.filters` 中

```js
function initAssetRegisters (Vue: GlobalAPI) {
    // ASSET_TYPES：['component', 'directive', 'filter']
    ASSET_TYPES.forEach(type => {
        Vue[type] = function (
            id: string,
            definition: Function | Object
        ): Function | Object | void {
            if (!definition) {
                return this.options[type + 's'][id]
            } else {
                /* istanbul ignore if */
                if (process.env.NODE_ENV !== 'production' && type === 'component') {
                    // 如果是组件，则要校验组件名是否合法
                    validateComponentName(id)
                }
                if (type === 'component' && isPlainObject(definition)) {
                    definition.name = definition.name || id
                    // Vue.options._base === Vue，这里实际上是调用 Vue.extend 生成子类
                    definition = this.options._base.extend(definition)
                }
                if (type === 'directive' && typeof definition === 'function') {
                    // 自定义指令
                    definition = { bind: definition, update: definition }
                }
                // 将组件|指令|过滤器 加入到 Vue.options 中，之后的 Vue实例化时会合并到最终配置中，这样就能直接使用了，也就变成“全局”了
                this.options[type + 's'][id] = definition
                return definition
            }
        }
    })
}
```

#### 5、<span id="Vue_set">Vue.set</span>

`Vue.set`可以处理数组与对象，数组通过变异方法`splice`实现；针对对象的处理：属性如果存在，直接赋值即可，如果不存在该属性，需判断对象是否为响应式，如果不是响应式，直接增加该属性，如果是响应式对象，则需要为新属性添加响应式，并通知依赖更新

```js
/**
 * @param { Array<any> | Object } target
 * @param { any } key
 * @param { any } val
 */
function set (target, key, val) {
    if (process.env.NODE_ENV !== 'production' &&
        (isUndef(target) || isPrimitive(target))
    ) {
        warn(`Cannot set reactive property on undefined, null, or primitive value: ${target}`)
    }
    // 判断是数组 并且 key 为有效的数字
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key)
        // 通过 splice 方法实现响应式更新
        target.splice(key, 1, val)
        return val
    }
    // 更新对象已有属性，Vue.set(obj, key, val)，执行更新即可
    if (key in target && !(key in Object.prototype)) {
        target[key] = val
        return val
    }

    const ob = target.__ob__
    // 不能向 Vue 实例或者 $data 动态添加响应式属性，vmCount 的用处之一，
    // 如果 ob.vmCount = 1，表示根级响应式对象，其它 vm.vmCount = 0 则表示子属性对象
    /**
     * 在实例化后，this.$data.__ob__.vmCount = 1；而子属性 this.$data.form.__ob__.vmCount = 0;
     * data() {
     *    return {
     *        sum: 1,
     *        form: {
     *          value: 'value'
     *        }
     *    }
     * }
     */
    if (target._isVue || (ob && ob.vmCount)) {
        // _isVue：一个标志，表示该对象是 Vue 实例
        process.env.NODE_ENV !== 'production' && warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
        )
        return val
    }
    // target 不是响应式对象，新属性会被设置，但是不会做响应式处理
    if (!ob) {
        target[key] = val
        return val
    }
    // defineReactive 方法添加属性并设置响应式
    defineReactive(ob.value, key, val)
    // 通知依赖更新
    ob.dep.notify()
    return val
}
```

#### 6、<span id="Vue_delete">Vue.delete</span>
```js
/**
 * @param { Array<any> | Object } target
 * @param { any } key
 */
function del (target, key) {
    if (process.env.NODE_ENV !== 'production' &&
        (isUndef(target) || isPrimitive(target))
    ) {
        warn(`Cannot delete reactive property on undefined, null, or primitive value: ${target}`)
    }
    // 数组通过 变异方法 splice 删除，如果数组是响应式的，splice会触发更新，如果不是响应式则直接删除数组元素
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1)
        return
    }
    const ob = target.__ob__
    // Vue.delete 不能操作 Vue 实例 也不能删除根级属性（根级属性 ob.vmCount = 1，非根级 ob.vmCount = 0）
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== 'production' && warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
        )
        return
    }
    // 要删除的属性不存在，自然不用处理
    if (!hasOwn(target, key)) {
        return
    }
    // 对象 使用运算符 delete 删除
    delete target[key]
    // 非响应式属性不用触发更新
    if (!ob) {
        return
    }
    // 响应式属性则通知依赖更新
    ob.dep.notify()
}
```

#### 7、<span id="Vue_nextTick">Vue.nextTick</span>

请查看  <a href="/parse/nextTick">nextTick</a>
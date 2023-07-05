# initProvide && initInjections

`provide/inject` 一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效

```js
// src\core\instance\init.js
Vue.prototype._init = function(options) {
    const vm = this;
    ...
    // beforeCreate 拿不到 inject 数据
    callHook(vm, 'beforeCreate')
    initInjections(vm)
    initState(vm)
    initProvide(vm)
    // created 能获取 inject 数据
    callHook(vm, 'created')
}
```

### initProvide 处理 provide 选项

将处理后的 `provide` 直接放到 `vm._provided` 上

```js
// src\core\instance\inject.js
export function initProvide (vm: Component) {
  const provide = vm.$options.provide
  if (provide) {
    // provide: Object | () => Object 一个对象或返回一个对象的函数
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide
  }
}
```

### initInjections 处理 inject 选项

```js
// 查找组件链上的 provide，将属性代理到 vm 上
export function initInjections (vm: Component) {
    // 解析 inject => 返回 key-value 对象
    const result = resolveInject(vm.$options.inject, vm)
    if (result) {
        // 避免 result[key] 被处理成响应式，官网也说了 provide 和 inject 绑定并不是可响应的。这是刻意为之的；如果你想数据是响应式的，可以传入一个响应式对象
        toggleObserving(false)
        Object.keys(result).forEach(key => {
            /* istanbul ignore else */
            // 将属性代理到 vm 上
            if (process.env.NODE_ENV !== 'production') {
                defineReactive(vm, key, result[key], () => {
                    // 修改 provide 数据会发出警告，与 props 一样，不建议修改 provide 数据，因为如果祖先组件（注入provide数据的组件）渲染或数据改变，本地组件的修改可能被覆盖
                    warn(
                        `Avoid mutating an injected value directly since the changes will be ` +
                        `overwritten whenever the provided component re-renders. ` +
                        `injection being mutated: "${key}"`,
                        vm
                    )
                })
            } else {
                defineReactive(vm, key, result[key])
            }
        })
        toggleObserving(true)
    }
}
```

### resolveInject 解析 inject

```js
// 顺着组件链查找相应的 provide，没有找到就使用默认值
export function resolveInject (inject: any, vm: Component): ?Object {
    if (inject) {
        // inject is :any because flow is not smart enough to figure out cached
        const result = Object.create(null)
        // 判断原生是否支持 Symbol
        const keys = hasSymbol
            // 返回所有可枚举属性（包含Symbol）
            ? Reflect.ownKeys(inject)
            // 返回所有可枚举属性（不包含Symbol）
            : Object.keys(inject)

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i]
            // #6574 in case the inject object is observed...
            // 如果一个对象被 Vue 观察过，会被添加一个 __ob__ 属性，这里应该要把 __ob__ 剔除
            if (key === '__ob__') continue
            /*
                normalizeInject 将属性都处理成下面的格式 src\core\util\options.js
                inject: {
                    foo: {
                        from: 'bar', 从一个不同名字的 property 注入
                        default?: 'foo' 默认值
                    }
                }
            */
            const provideKey = inject[key].from
            let source = vm
            // 从自身开始查找，但由于 initInjections 比 initProvide 先执行，此时 vm._provided 一定没有值，即不会取到自身 provide 提供的值，只会从最近的父实例开始
            // 顺着 组件链 查找上级的 provide
            while (source) {
                // vm._provided 即 经过处理的 provide，如果组件有提供则有值，否则为undefined，属性在 src\core\instance\inject.js 中处理
                if (source._provided && hasOwn(source._provided, provideKey)) {
                    result[key] = source._provided[provideKey]
                    break
                }
                // 沿着 孙 -> 父 -> 祖 直到根实例
                source = source.$parent
            }
            // 查到根组件还没有查到，就是用默认值
            if (!source) {
                if ('default' in inject[key]) {
                    const provideDefault = inject[key].default
                    // default: () => [1, 2, 3] 非原始值 需要使用工厂函数返回
                    result[key] = typeof provideDefault === 'function'
                        ? provideDefault.call(vm)
                        : provideDefault
                } else if (process.env.NODE_ENV !== 'production') {
                    // 组件链没找到也没默认值，则警告
                    warn(`Injection "${key}" not found`, vm)
                }
            }
        }
        return result
    }
}
```
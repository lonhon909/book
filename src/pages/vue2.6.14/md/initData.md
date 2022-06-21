# data 响应式处理 initData

`data` 处理位置 `_init => initState => initData` --- 源码位置 src\core\instance\state.js

```js
// 1、查重，当 data 属性与 methods 或 props 中属性重复时，发出警告
// 2、遍历 data 将属性代理到 vm 上，通过 vm.xxx 访问 data
// 3、响应式处理 调用 observe 函数处理 data
function initData(vm) {
    // 初始化 Vue 选项都在 $options 上
    let data = vm.$options.data
    // 如果 data 是函数，则执行并返回结果，getData() 内部执行 data() 函数并返回结果
    data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {};
    if (!isPlainObject(data)) { // isPlainObject 判断是否为对象
        // data 不是对象则发出警告
        data = {}
        warn(...)
    }
    // 获取 data 对象键名
    const keys = Object.keys(data)
    // 获取 props、methods 用于判重
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    // 遍历 data
    while (i--) {
        const key = keys[i]
        ...
        // 属性名与 methods 中的重名了，发出警告
        if (methods && hasOwn(methods, key)) {
            warn(...)
        }
        ...
        // 属性名与 props 中重名了，发出警告
        if (props && hasOwn(props, key)) {
            warn(...)
        }  else if (!isReserved(key)) { // isReserved 查询 key 的第一个字符是否为 $ 或 _，这两开头的 Vue 保留给内部用的
            // 符合要求的 data 属性，则将属性代理到 vm 上，通过 vm.xxx 访问 vm._data.xxx
            proxy(vm, `_data`, key)
        }
    }
    // data 设置响应式
    observe(data, true /* asRootData */)
}
```

## proxy

`proxy` 将属性代理到 `vm` 上

```js
/**
 * 即将 vm._data.xxx 属性代理到 vm 上，这样通过 vm.xxx 即可获取到 vm._data.xxx
 * 将源对象上的属性代理到目标对象上
 * @param {*} target 目标对象
 * @param {*} sourceKey 源对象
 * @param {*} key 
*/
function proxy(target, sourceKey, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function proxyGetter () {
            // 当获取 vm.xxx 时，this 指向 vm，所以此处实际上访问的是 vm[sourceKey][key]
            return this[sourceKey][key]
        },
        set: function proxySetter (val) {
            // 当设置 vm.xxx = val 时，this 指向 vm，所以此处实际上设置的是 vm[sourceKey][key] = val
            this[sourceKey][key] = val
        }
    })
}
```

## observe

响应式入口

```js
/**
 * @param { any } value 需要被处理的对象
*/
function observe(value, asRootData) {
    // 判断非对象或者 VNode 直接返回
    if (!isObject(value) || value instanceof VNode) {
        return
    }
    let ob;
    // 判断对象是否已被响应式处理，是则直接使用缓存 __ob__，每个响应式处理的对象都会有一个 __ob__ 属性
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__
    } else if (
        shouldObserve &&
        !isServerRendering() && // 判断是否是服务端渲染
        (Array.isArray(value) || isPlainObject(value)) && // 被观测的数据对象必须是数组或者纯对象
        Object.isExtensible(value) && // 方法判断一个对象是否是可扩展
        !value._isVue // 避免观察一个 Vue 实例
    ) {
        // 创建观察者实例
        ob = new Observer(value)
    }
    if (asRootData && ob) {
        ob.vmCount++
    }
    return ob;
}
```

## Observer

```js
class Observer {
    constructor(value) {
        ...
        // 设置 __ob__（不可枚举） 表示对象已被响应式观察
        def(value, '__ob__', this);
        if (Array.isArray(value)) {
            if (hasProto) {
                // 为了响应数组的变化，这里对数组的某些方法进行了重写
                protoAugment(value, arrayMethods)
            } else {
                ...
            }
            // 为数组的每一项都添加响应式
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }
    // 遍历属性转换成 setter/getters
    walk(obj) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            // 为每个属性都添加响应式
            defineReactive(obj, keys[i])
        }
    }
    observeArray (items) {
        // 对数组的每一项都进行响应式处理
        for (let i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }
}
```

## defineReactive 真正设置响应式的入口

```js
```
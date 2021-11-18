# `Vue.$set`

源码

```js
export function set (target: Array<any> | Object, key: any, val: any): any {
    if (process.env.NODE_ENV !== 'production' &&
        (isUndef(target) || isPrimitive(target)) // 判断undefined null 原始数据类型
    ) {
        warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
    }
    // 如果是数组，使用变异数组方法触发更新
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.length = Math.max(target.length, key)
        target.splice(key, 1, val)
        return val
    }
    // 如果该属性已经存在target对象上，直接赋值，响应式对象能触发更新
    if (key in target && !(key in Object.prototype)) {
        target[key] = val
        return val
    }
    // vue给响应式对象都加了一个 __ob__ 属性，
    // 如果一个对象有这个 __ob__ 属性，那么就说明这个对象是响应式对象，修改对象已有属性的时候就会触发页面渲染。
    const ob = (target: any).__ob__
    // target._isVue表示组件实例，对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property
    if (target._isVue || (ob && ob.vmCount)) {
        process.env.NODE_ENV !== 'production' && warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
        )
        return val
    }
    // 不是响应式对象，新增属性不会触发视图更新
    if (!ob) {
        target[key] = val
        return val
    }
    // 是响应式对象，进行依赖收集
    defineReactive(ob.value, key, val)
    // 视图更新
    ob.dep.notify()
    return val
}
```

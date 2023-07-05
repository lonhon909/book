# eventsMixin

发布-订阅模式

`Vue`实例为调度中心，`$on`订阅事件，`$emit`发布事件，然后调度中心开始处理订阅回调，`$off`取消订阅，`$once`订阅一次事件

+ `vm.$on` 订阅事件
+ `vm.$once` 订阅一次事件
+ `vm.$off` 取消订阅
+ `vm.$emit` 发布事件

```js
export function eventsMixin (Vue) {
    const hookRE = /^hook:/
    /**
     * 监听指定事件，入参为事件名或事件名组成的数组，传数组则表示监听多个事件
     * vm.$on('eventName', fn)
     * 
     * @param { string | Array<string> } event 函数名|函数名数组
     * @param {*} fn 监听的回调
     */
    Vue.prototype.$on = function (event, fn) {
        // vm 为事件总线，即调度中心
        const vm = this
        // 传数组则遍历监听
        if (Array.isArray(event)) {
            for (let i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn)
            }
        } else {
            // 订阅者订阅的事件 vm._events[event] 中
            (vm._events[event] || (vm._events[event] = [])).push(fn)
            if (hookRE.test(event)) {
                // hook监听
                vm._hasHookEvent = true
            }
        }
        return vm
    }

    /**
     * 订阅一次，实际上就是执行 vm.$on 并在执行回调时取消订阅
     * vm.$once('eventName', fn)
     * 
     * @param { string } event 
     * @param {*} fn 
     */
    Vue.prototype.$once = function (event, fn) {
        const vm = this
        // 重写订阅回调事件，并在新的事件中执行真实回调并取消订阅
        function on () {
            vm.$off(event, on)
            fn.apply(vm, arguments)
        }
        on.fn = fn // 这里是为了在取消订阅时对比，因为这里订阅回调被重写了
        vm.$on(event, on)
        return vm
    }

    /**
     * 取消订阅
     * vm.$off('eventName') 取消该事件名下所有的订阅
     * vm.$off('eventName', fn) 取消该事件名下指定的订阅
     * 
     * @param { undefined | string | Array<string> } event 需要取消订阅的函数或函数数组
     * @param {*} fn 
     */
    Vue.prototype.$off = function (event, fn) {
        const vm = this
        if (!arguments.length) {
            // 不传事件名，则取消所有的监听，清空事件总线所有缓存的订阅回调
            vm._events = Object.create(null)
            return vm
        }
        if (Array.isArray(event)) {
            // 传数组时，表示取消多个事件的订阅
            for (let i = 0, l = event.length; i < l; i++) {
                vm.$off(event[i], fn)
            }
            return vm
        }
        // 获取该事件下所有订阅的事件
        const cbs = vm._events[event]
        if (!cbs) {
            // !cbs 表示该事件下不存在订阅
            return vm
        }
        if (!fn) {
            // 不传fn，则表示取消该事件下所有的订阅
            vm._events[event] = null
            return vm
        }
        let cb
        let i = cbs.length
        // 遍历该事件下所有回调，取消指定的回调
        while (i--) {
            cb = cbs[i]
            if (cb === fn || cb.fn === fn) { // cb.fn === fn 是指 vm.$once 时，cb 指向的是重写的回调，cb.fn 才是真实回调
                cbs.splice(i, 1)
                break
            }
        }
        return vm
    }

    /**
     * 发布事件，触发执行指定的事件回调
     * vm.$emit('eventName', arg1, arg2, ...)
     * 
     * @param { string } event 触发事件名
     */
    Vue.prototype.$emit = function (event) {
        const vm = this
        if (process.env.NODE_ENV !== 'production') {
            // 事件名大小写警告
            ...
        }
        // 获取该事件名下所有的订阅回调
        let cbs = vm._events[event]
        if (cbs) {
            cbs = cbs.length > 1 ? toArray(cbs) : cbs
            // 获取参数 args = [arg1, arg2, ...]
            const args = toArray(arguments, 1)
            const info = `event handler for "${event}"`
            // 遍历并执行回调，invokeWithErrorHandling 内部执行
            for (let i = 0, l = cbs.length; i < l; i++) {
                invokeWithErrorHandling(cbs[i], vm, args, vm, info)
            }
        }
        return vm
    }
}
```

```js
function invokeWithErrorHandling(handler, context, args) {
    let res
    try {
        // 这里在上下文环境中执行订阅的事件
        res = args ? handler.apply(context, args) : handler.call(context)
        ...
    } catch (e) {
        ...
    }
    return res
}
```
# watch 的实现原理

`watch` 分为两种调用方式

+ 作为 `vue` 选项对象存在
    ```vue
        <template></template>
        <script>
            export default {
                ...
                watch: {} // 内部处理后实际上也是通过 vm.$watch 的方式
            }
        </script>
    ```
+ 直接通过 `vm.$watch()` 调用
    ```js
    mounted() {
        const unwatch = this.$watch('count', (newCount, oldCount) => {
            ...
            if (newCount >= 10) {
                unwatch(); // vm.$watch 返回一个取消监听的函数
            }
        })
    }
    ```

## Vue 初始化对 watch 的处理

`Vue` 初始化在 `initState` 中执行 `initWatch`，`initWatch` 遍历 `watch` 并对 `watch` 的值进行处理，如果是字符串，则取 `vm.methods` 中的函数，如果是数组则分别处理（可以看成多个监听，只是监听的属性是同一个）

```js
Vue.prototype._init = function(options) {
    ...
    // initState 中对选项 watch 进行了处理
    initState();
    ...
}
function initState(vm) {
    const opts = vm.$options
    ...
    // 有 watch 选项时才需要处理
    if (opts.watch) {
        /* initWatch 中遍历 wacth 的每一项，并进行格式化处理
         * 实际内部调用 vm.$watch(key, cb, options)
         * watch: {
         *      name: {
         *          immediate: true,
         *          handler() {}
         *      },
         * }
         * 格式处理后统一为 vm.$watch('name', handler, { immediate: true })
        */
        initWatch(vm, opts.watch)
    }
}
```

### Vue.property.$watch

`initWatch` 内部实际上就是调用 `vm.$watch` 方法

```js
/**
 * watch 监听数据变化
 * @param {*} expOrFn - key 监听的数据
 * @param {*} cb - value 数据变化时执行回调
 * @param {*} options 配置对象 如：{ immediate: true } 立即执行一次
 */
Vue.property.$watch = function(expOrFn, cb, options) {
    const vm = this;
    ...
    // 创建 Watcher 实例，主要实现在 watcher 内部
    const watcher = new Watcher(vm, expOrFn, cb, options);
    // immediate = true 时立即执行一次
    if (options.immediate) {
        ...
        // 内部会执行 cb();
        invokeWithErrorHandling(cb, vm, [watcher.value], vm, info)
        ...
    }
    // 返回一个用于取消监听的函数，调用则取消监听
    return function unwatchFn () {
      watcher.teardown()
    }
}
```

### Wacther


```js
class Watcher {
    /**
     * @param { Vue } vm 
     * @param {*} expOrFn updateComponent 更新函数 | watch 监听的 key
     * @param {*} cb 
     * @param {*} options 
     * @param {*} isRenderWatcher 是否为渲染 watcher
     */
    constructor(vm, expOrFn, cb, options) {
        this.vm = vm;
        ...
        if (options) {
            this.deep = !!options.deep;
            ...
            this.lazy = !!options.lazy; // false
            ...
        }
        ...
        // watch 传入的是字符串，执行 else
        if (typeof expOrFn === 'function') {
            this.getter = expOrFn;
        } else {
            // watch 监听时传入的是一个 vm.data | computed 中的字段，parsePath 返回一个函数，该函数用于获取 vm 上的值
            // 如：监听 name，则返回一个获取 vm.name 值的函数，调用 this.getter.call(vm) 获 name 值
            this.getter = parsePath(expOrFn);
        }
        ...
        // 初始化 watcher 时，lazy = false 这里会执行 this.get() 并将值存在 this.value 上
        this.value = this.lazy
            ? undefined
            : this.get();
    }

    get() {
        // 赋值 Dep.target = this 准备收集依赖
        pushTarget(this);
        let value
        const vm = this.vm
        try {
            // 获取一次监听的值，这里会触发 Object.definedProperty 收集依赖，即将当前 监听watch 生成的 实例 watcher 加入 dep 中，当下次监听的值改变时，会通知收集到的依赖执行 update 方法
            /**
             * vue 初始化过程中，会对 data、computed 进行遍历并为每个属性做 defineReactive 响应式处理  
            */
            value = this.getter.call(vm, vm);
        } catch(e) {
            ...
        } finally {
            // deep 深度监听
            if (this.deep) {
                traverse(value)
            }
            popTarget()
        }
        return value
    }
    // 当监听的值变化时，dep 通知收集的依赖更新，即执行 update()
    update() {
        ...
        // 这里处理相应的回调函数
    }
}
```

### defineReactive 响应式处理

```js
function defineReactive(obj, key) {
     const dep = new Dep(); // 每个属性都有一个闭包 dep，用于收集用到该属性的 watchers
     ...
     Object.defineProperty(obj, key, {
         ...
         get: function() {
             const value = getter ? getter.call(obj) : val;
             // get中 收集依赖
             if (Dep.target) {
                 dep.depend();
                 ...
             }
             return value;
         },
         set: function(newVal) {
             const value = getter ? getter.call(obj) : val;
             if (newVal === value) return;
             ...
             // 值改变时 通知依赖更新
             dep.notify();
         }
     })
}
```
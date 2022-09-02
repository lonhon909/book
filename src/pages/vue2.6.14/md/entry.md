# new Vue

+ `src\platforms\web\entry-runtime-with-compiler.js` 全量包入口起点，包含编译器（`compiler`）和运行时（`runtime`）代码
+ `src\platforms\web\entry-runtime.js` 运行时包入口起点，仅包含运行时（`runtime`）代码
  * `src\platforms\web\runtime\index.js`
  * `src\core\index.js`
  * `src\core\instance\index.js`

## 1、初始化 new Vue(options) --- `src\core\instance\index.js`

```js
//  Vue 是一个构造函数，通过 new 调用
function Vue (options) {
  ...
  // 调用 Vue.prototype._init, 该方法在 initMixin 中定义
  this._init(options)
}
```

## 2、`initMixin` --- `src\core\instance\init.js`

`_init` 方法在 `initMixin` 中定义

```js
function initMixin (Vue) {
  // Vue根组件|局部组件|全局组件|使用 Vue.extend 构建的"子类"|实例化是都会执行 _init
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // 每个 Vue 实列都有一个 _uid，并依次递增
    vm._uid = uid++

    let startTag, endTag
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    vm._isVue = true // 标记该对象为 Vue 实例
    // merge options
    if (options && options._isComponent) {
      // ^ _isComponent组件标记，表示当前实例为组件(局部组件，全局组件)
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      // 合并options和默认配置生成最终$options；根组件 new Vue()，或者 Vue.extend 构建的子类实例化时
      vm.$options = mergeOptions(
        // 解析默认 options 
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      // ^ Vue 新增实例属性 _renderProxy，将 vm 实例上的属性代理到 vm._renderProxy
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm

    // ^ 新增实例属性：$parent、$root、$children、$refs、_watcher、_inactive、_directInactive、_isMounted、_isDestroyed、_isBeingDestroyed
    /**
     * @param { Vue } $parent 父实例
     * @param { Vue } $root 组件树的根实例
     * @param { Vue[] } $children 当前实例的直接子组件
     */
    initLifecycle(vm)
    /** ^ vm
     * @property { Array } _events 父组件绑定在子组件上的事件以及组件自身通过 $on $once 监听的事件
     * @property { Boolean } _hasHookEvent 父组件是否通过"@hook:"把钩子函数绑定在当前组件上，或者组件自身 通过 $on $once 监听
     */
    initEvents(vm)
    /** ^ vm
     * @property { null } _vnode 经过 render 函数处理的 VNode
     * @property { null } _staticTrees
     * @property { undefined } $vnode 未经 render 函数处理的 VNode
     * @property { Object } $slots
     * @property { Object } $scopedSlots
     * @property { Function } $createElement h函数
     * @property { Object } $attrs
     * @property { Object } $listeners
     */
    initRender(vm)
    // beforeCreate 在 initState 之前，因此此时无法获取 data props methods 等
    callHook(vm, 'beforeCreate')

    // 初始化组件的 inject 配置项，查找组件链上的 provide，响应式 inject，并将属性代理到 vm 上
    initInjections(vm) // resolve injections before data/props
    
    // vm._watchers 响应式处理，并将属性代理到 vm
    /**
     * @property { Array } _watchers
     */
    initState(vm)
    // 解析组件配置项上的 provide 对象，将其挂载到 vm._provided 属性上
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    // 发现选项中有 el，自动调用 $mount 方法
    if (vm.$options.el) {
      // $mount 方法在 src\platforms\web\runtime\index.js 中定义
      vm.$mount(vm.$options.el)
    }
  }
}
```

### 解析默认配置 resolveConstructorOptions

请查看 <a href="/parse/resolveConstructorOptions">resolveConstructorOptions</a>
# `Vue.extend`

### 1、使用基础 `Vue` 构造器，创建一个“子类”。参数是一个包含组件选项的对象

```js
const HelloWorld = Vue.extend({
    props: {
        name: String
    },
    data() {
        return {
            age: 18
        }
    },
    render() {
        return (
            <div>{this.name}-{this.age}</div>
        )
    }
});

// parant
mounted() {
    this.$el.appendChild(new HelloWorld({
        propsData: {
            name: '小心新'
        }
    }).$mount().$el)
}
```

### 2、扩展组件

```js
// 扩展组件
const ChildrenExtend = Vue.extend({
    mixins: [HelloWorld],
    props: {},
    data() {
        return {}
    },
    methods: {},
})
```

### 3、源码

```js
// 源码 src/core/global-api/extend.js
Vue.extend = function (extendOptions: Object): Function {
    // Vue.extend(options)传入的选项对象
    extendOptions = extendOptions || {}
    // Super指Vue
    const Super = this
    const SuperId = Super.cid
    // 创建缓存池
    const cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
    // 重复调用Vue.extend(同一个组件或者组件选项对象)，返回缓存，类似单列
    if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
    }
    // 判断name合法性
    const name = extendOptions.name || Super.options.name
    if (process.env.NODE_ENV !== 'production' && name) {
        validateComponentName(name)
    }
    // 创建子类构造函数，经典继承
    const Sub = function VueComponent (options) {
        this._init(options)
    }
    Sub.prototype = Object.create(Super.prototype)
    Sub.prototype.constructor = Sub
    // 为子类添加了cid，它表示每个类的唯一标识
    Sub.cid = cid++
    // 合并 默认的options与传入的options
    Sub.options = mergeOptions(
        Super.options,
        extendOptions
    )
    Sub['super'] = Super
    // 初始化props
    if (Sub.options.props) {
        initProps(Sub)
    }
    // 初始化computed
    if (Sub.options.computed) {
        initComputed(Sub)
    }

    // 父类的属性和方法在子类上都来一遍
    Sub.extend = Super.extend
    Sub.mixin = Super.mixin
    Sub.use = Super.use

    ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type]
    })
    if (name) {
        // 有name属性时，就能使用递归组件
        Sub.options.components[name] = Sub
    }

    Sub.superOptions = Super.options
    Sub.extendOptions = extendOptions
    Sub.sealedOptions = extend({}, Sub.options)
    // 加入缓存
    cachedCtors[SuperId] = Sub
    return Sub
}
```

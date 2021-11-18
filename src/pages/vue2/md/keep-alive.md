# `keep-alive`

- 包裹动态组件 `<component is=""></component>`
- 包裹条件判断的子组件

- `include` -- 字符串、正则、数组，匹配的组件会被缓存
- `exclude` -- 字符串、正则、数组，匹配的组件不会被缓存（比 `include` 优先级高）
- `max` -- 最多缓存数量

```html
<keep-alive
    include="a,b"
    :include="/a|b/"
    :include="['a', 'b']"
    exclude="a,b"
    :exclude="/a|b/"
    :exclude="['a', 'b']"
    :max="3">
    <component :is="view"></component>
</keep-alive>
```

```js
// https://www.jianshu.com/p/9523bb439950  源码解析
// keep-alive源码
export default {
    name: 'keep-alive',
    // 抽象组件，不渲染为真实dom
    abstract: true,
    props: {
        include: patternTypes,
        exclude: patternTypes,
        max: [String, Number]
    },
    methods: {
        cacheVNode() {
            const { cache, keys, vnodeToCache, keyToCache } = this
            // 仅需要被缓存的组件第一次时vnodeToCache有值
            if (vnodeToCache) {
                const { tag, componentInstance, componentOptions } = vnodeToCache
                cache[keyToCache] = {
                    name: getComponentName(componentOptions),
                    tag,
                    componentInstance,
                }
                keys.push(keyToCache)
                // 超过max时，销毁最老的缓存实例
                if (this.max && keys.length > parseInt(this.max)) {
                    pruneCacheEntry(cache, keys[0], keys, this._vnode)
                }
                // 置为null，下次缓存组件被激活触发keep-alive的钩子updated时就不会进入 if 判断
                this.vnodeToCache = null
            }
        }
    },
    created () {
        // keep-alive内部缓存VNode
        this.cache = Object.create(null)
        this.keys = []
    },
    destroyed () {
        // 卸载时依次调用缓存实例的 $destroy 销毁，清空缓存
        for (const key in this.cache) {
            pruneCacheEntry(this.cache, key, this.keys)
        }
    },
    mounted () {
        this.cacheVNode()
        // 实时监听keep-alive包裹的组件是否需要缓存，如果不需要缓存时，将实例销毁
        this.$watch('include', val => {
            pruneCache(this, name => matches(val, name))
        })
        this.$watch('exclude', val => {
            pruneCache(this, name => !matches(val, name))
        })
    },
    updated () {
        this.cacheVNode()
    },
    render () {
        const slot = this.$slots.default
        // keep-alive只会处理第一个子组件
        const vnode: VNode = getFirstComponentChild(slot)
        // 组件选项对象
        const componentOptions: ?VNodeComponentOptions = vnode && vnode.componentOptions
        if (componentOptions) {
            // check pattern
            const name: ?string = getComponentName(componentOptions)
            const { include, exclude } = this
            if (
                // 组件name不在include或者组件name在exclude里面，不做缓存，exclude优先级更高
                // not included
                (include && (!name || !matches(include, name))) ||
                // excluded
                (exclude && name && matches(exclude, name))
            ) {
                return vnode
            }

            const { cache, keys } = this
            // 定义组件的缓存key
            const key: ?string = vnode.key == null
                ? componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
                : vnode.key
            if (cache[key]) { // 表示该组件已被缓存过
                vnode.componentInstance = cache[key].componentInstance
                // 调整该组件在keys中的位置为最新
                remove(keys, key)
                keys.push(key)
            } else { // 表示组件第一次被缓存
                // 用于render()后执行下一个钩子mounted，执行this.cacheVNode()
                this.vnodeToCache = vnode
                this.keyToCache = key
            }

            vnode.data.keepAlive = true
        }
        return vnode || (slot && slot[0])
    }
}
```

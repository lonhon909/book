# 异步组件

推荐的做法是将异步组件和 `webpack 的 code-splitting` 功能一起配合使用，实现需要的时候才加载

```js
export default {
    components: {
        HelloWorld: () => import('../components/HelloWorld'),
        ChildText: (resolve) => require(['../components/ChildText'], resolve)
    }
}
```

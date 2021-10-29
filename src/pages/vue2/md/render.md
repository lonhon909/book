# 渲染函数 `render`

```js
// createElement（h）函数参数
h(
    // 一个 HTML 标签名
    'div',
    // 一个与模板中 attribute 对应的数据对象。可选。
    {},
    // 子级虚拟节点 (VNodes)，也可以使用字符串来生成“文本虚拟节点”。可选。
    // {String|Array}
    []
)

// 数据对象
{
    // 与 `v-bind:class` 的 API 相同，
    // 接受一个字符串、对象或字符串和对象组成的数组
    'class': {
        foo: true,
        bar: false
    },
    // 与 `v-bind:style` 的 API 相同，
    // 接受一个字符串、对象，或对象组成的数组
    style: {
        color: 'red',
        fontSize: '14px'
    },
    // 普通的 HTML attribute
    attrs: {
        id: 'foo'
    },
    // 组件 prop
    props: {
        myProp: 'bar'
    },
    // DOM property
    domProps: {
        innerHTML: 'baz'
    },
    // 事件监听器在 `on` 内，
    // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
    // 需要在处理函数中手动检查 keyCode。
    on: {
        click: this.clickHandler
    },
    // 仅用于组件，用于监听原生事件，而不是组件内部使用
    // `vm.$emit` 触发的事件。
    nativeOn: {
        click: this.nativeClickHandler
    },
    // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
    // 赋值，因为 Vue 已经自动为你进行了同步。
    directives: [],
    // 作用域插槽的格式为
    // { name: props => VNode | Array<VNode> }
    scopedSlots: {
        default: props => createElement('span', props.text)
    },
    // 如果组件是其它组件的子组件，需为插槽指定名称
    slot: 'name-of-slot',
    // 其它特殊顶层 property
    key: 'myKey',
    ref: 'myRef',
    // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
    // 那么 `$refs.myRef` 会变成一个数组。
    refInFor: true
}
```

## Teleport

内置组件，它可以将一个组件内部的一部分模板“`传送`”到该组件的 `DOM` 结构外层的位置去

props:
+ `to: string | HTMLElement` 指定目标容器，必须是实体元素或选择器
+ `disabled: boolean` 是否禁用，可以动态修改，禁用时会渲染在原始位置

```js
// div会渲染在body下，但 msg 任然属于组件，并会响应变化
<Teleport to="body" :disabled="disabled">
    <div class="popup">{{msg}}</div>
</Teleport>
```
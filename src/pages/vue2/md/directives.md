# 自定义指定 ``

```js
/**
 * 
 * @param {*} el 指令所绑定的元素，可以用来直接操作 DOM
 * @param {*} binding 参数对象
 * @param {*} vnode Vue 编译生成的虚拟节点
 * @param {*} oldVnode 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
 */
bind(el, binding, vnode, oldVnode) {
    console.log(binding);
},
inserted(el, { value }) {
    if (value) {
        dragMouse(el);
    }
},
componentUpdated(el, { value }) {
    if (!value) {
        el.onmousedown = null;
    } else {
        dragMouse(el);
    }
},
unbind() {
    console.log('unbind');
}
```

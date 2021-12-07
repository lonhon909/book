# `requestAnimationFrame`

浏览器在下次重绘之前调用指定的回调函数更新动画，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。为了提高性能和电池寿命，因此在大多数浏览器里，当 `requestAnimationFrame()` 运行在后台标签页或者隐藏的 `<iframe>` 里时，`requestAnimationFrame()` 会被暂停调用以提升性能和电池寿命。

```html
<input type="button" value="start" onclick="start()">
<input type="button" value="stop" onclick="stop()">

<div id="box"></div>
```

```js
const box = document.getElementById('box');
let w = box.offsetWidth;
let id = null;

function change() {
    if (w < 1000) {
        w += 1;
        box.style.width = w + 'px';
        // 若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()
        id = window.requestAnimationFrame(change);
    }
}
function start() {
    id = window.requestAnimationFrame(change);
}
// 取消动画
function stop() {
    window.cancelAnimationFrame(id);
}
```

兼容性

```js
ref = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
```

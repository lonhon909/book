# canvas

`<canvas>` 标签只是图形容器，必须通过脚本来绘制图形，`canvas` 是一个二维网格，左上角的坐标是`(0, 0)`，右下角坐标`(x, y)`；只支持一种原生的图形绘制：`矩形`，其他图形需要路径绘制

1、DOM属性
- `width` - 默认 300px，规定画布的高度
- `height` - 默认 150px，规定画布的宽度

2、用法
```html
<canvas id="canvas">
    不支持 canvas 的浏览器则 会直接渲染替代内容
</canvas>
```

3、渲染上下文 - `画笔`
```js
const canvas = document.getElementById('canvas');
const ctx.getContext('2d'); // 画笔，使用渲染上下文来绘制和处理要展示的内容
```

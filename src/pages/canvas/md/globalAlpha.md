# globalAlpha - 透明度

`globalAlpha` 属性设置或返回绘图的当前透明值

```js
ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.font = '30px sans-serif';
// 图像1
ctx.fillRect(0, 0, 100, 100);
ctx.strokeText('Hello world!', 0, 150);
// 图像2
ctx.globalAlpha = 0.5;
ctx.fillRect(150, 0, 100, 100);
ctx.strokeText('Hello world!', 150, 200);
// 图像3
ctx.globalAlpha = 0.2;
ctx.fillRect(300, 0, 100, 100);
ctx.strokeText('Hello world!', 300, 250);
```
# shadow - 阴影

- `shadowColor` 设置或返回用于阴影的颜色
- `shadowBlur` 设置或返回用于阴影的模糊级别
- `shadowOffsetX` 设置或返回阴影与形状的水平距离
- `shadowOffsetY` 设置或返回阴影与形状的垂直距离

```js
// 阴影颜色
ctx.shadowColor = 'red';
// 阴影的模糊级别
ctx.shadowBlur = 10;
// 阴影x方向的偏移量
ctx.shadowOffsetX = 20;
// 阴影y方向的偏移量
ctx.shadowOffsetY = 50;
// 1、填充
ctx.fillRect(10, 10, 100, 100);
// 2、描边
ctx.strokeRect(150, 10, 100, 100);
// 3、文字
ctx.font="30px Verdana";
ctx.strokeText('Hello world!', 300, 50);
```
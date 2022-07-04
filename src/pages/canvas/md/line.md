# line - 线条样式

- lineWidth - 设置线条宽度
- lineJoin - 设置相交线条边角类型
- lineCap - 设置线条的结束端点样式
- setLineDash - 当前线段样式的数组，会重复数组数据

```js
// 设置线条宽度
ctx.lineWidth = 10;
// 设置两条线相交时边角类型
ctx.lineJoin = 'round';
ctx.strokeRect(20, 20, 200, 60);

ctx.beginPath();
// 设置线条的结束端点样式
ctx.lineCap = 'round';
ctx.moveTo(20, 120);
ctx.lineTo(200, 120);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 1;
// 设置线的类型（如：虚线）
ctx.setLineDash([3, 5]);
ctx.moveTo(20, 150);
ctx.lineTo(200, 150);
ctx.stroke();

ctx.beginPath();
ctx.setLineDash([10, 10]);
ctx.moveTo(20, 200);
ctx.lineTo(200, 200);
ctx.stroke();
```
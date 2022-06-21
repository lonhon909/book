# strokeStyle - 描边色

`strokeStyle` 设置或返回用于 **笔触** 的颜色、渐变或模式

```js
// 1、纯色
ctx.strokeStyle = 'red';
ctx.strokeRect(10, 10, 90, 90);
// 2、创建线性的渐变对象
const gradient = ctx.createLinearGradient(110, 10, 110, 130);
// 规定渐变对象中的颜色和位置 addColorStop(stop, color),stop介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'green');
gradient.addColorStop(1, 'blue');
ctx.strokeStyle = gradient;
ctx.strokeRect(110, 10, 110, 130);
// 3、渐变色文字
ctx.font="30px Verdana";
const grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
grd.addColorStop(0,"magenta");
grd.addColorStop(0.5,"blue");
grd.addColorStop(1,"red");
ctx.strokeStyle = grd;
ctx.strokeText('Hello world!', 250, 50, 300);
```
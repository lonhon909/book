# fillStyle - 填充色

`fillStyle` 属性设置或返回用于 **填充** 绘画的颜色、渐变或模式

1、填充固定色
```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 100, 100);
```
![填充固定色](/static/canvas/fillStyle1.png)

2、线性渐变色
```js
// 创建线性的渐变对象 createLinearGradient(x1, y1, x2, y2),(x1,y1)是渐变开始坐标,(x2,y2)是渐变结束坐标，这两个坐标同时也指明了渐变的方向
const gradient = ctx.createLinearGradient(0, 0, 0, 150); // 从上到下
// 规定渐变对象中的颜色和位置 addColorStop(stop, color),stop介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'green');
gradient.addColorStop(1, 'blue');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 100, 150);
```
![线性渐变](/static/canvas/fillstyle2.png)

3、创建放射状/圆形渐变对象
```js
// 创建放射状/圆形渐变对象 (x1, y1, r1, x2, y2, r2); (x1, y1, r1) 渐变开始圆的坐标与半径，(x2, y2, r2) 渐变结束圆的坐标与半径
const grd = ctx.createRadialGradient(250, 50, 5, 250, 50, 50); // 圆心可以不重合
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
ctx.fillStyle = grd;
ctx.fillRect(200, 0, 100, 100);
```
![径向渐变](/static/canvas/fillstyle3.png)
# path - 路径

- `beginPath` - 新起一条路径
- `moveTo` - 将画笔移动到指定位置
- `lineTo` - 添加一个新点，定义一条当前画笔位置到新点的轨迹线条
- `closePath` - 连接轨迹的开始与结束点，让整个路径闭合起来
- `fill` - 填充当前绘图（路径）
- `stroke` - 绘制已定义的路径
- `arc` - 创建弧/曲线（用于创建圆形或部分圆）

```js
// 1、新起一条路径或重置路径
ctx.beginPath();
// 2、移动画笔到指定位置，此时不会创建线条
ctx.moveTo(10, 50);
// 3、添加一个新点，定义一条当前画笔位置到新点的轨迹线条
ctx.lineTo(50, 200);
// 绘制已定义的线条路径
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(200, 200);
// 连接轨迹的开始与结束点，让整个路径闭合起来
ctx.closePath();
// 填充整个路径形成的闭合区域
ctx.fill();

ctx.beginPath();
// 创建圆或弧轨迹 arc(x, y, r, sAngle, eAngle, counterclockwise) => (圆心x, 圆心y, 半径, 起始角, 结束角, 顺时针true/逆时针false)
ctx.arc(300, 150, 50, 0, 1 * Math.PI); // 以弧度为计量
ctx.closePath();
ctx.stroke();
```
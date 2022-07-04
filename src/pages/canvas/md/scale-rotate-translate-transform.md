# 转换

- `translate` - 在当前基础上移动画布原点
    ```js
    // 移动原点到 (50, 50)
    ctx.translate(50, 50);
    ```
- `rotate` - 以原点为坐标轴旋转，顺时针
    ```js
    // 顺时针旋转 45°，采用弧度计算
    ctx.rotate(45 * Math.PI / 180);
    ```
- `resetTransform` - 重置矩阵到初始状态
- `setTransform` - 重置并设置新的单位矩阵
    ```js
    // 相当于 ctx.resetTransform() + ctx.transform(2, 0, 0, 1, 0, 0)
    ctx.setTransform(2, 0, 0, 1, 0, 0);
    ```
- `transform` - 多次叠加设置当前变换矩阵
    ```js
    // 最终会叠加两个状态，相当于 ctx.setTransform(1, 0, 0, 1, 10, 10)
    ctx.translate(10, 10);
    ctx.transform(1, 0, 0, 1, 0, 0);
    ```

```js
// 1、移动画布的原点坐标到(50, 50)
ctx.translate(50, 50);
ctx.fillRect(-50, -50, 50, 50); // 移动了原点，出现负值坐标了
// 2、重置并创建新的矩阵，而 transform 是在原来的基础上变换矩阵
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.translate(50, 50);
// 以当前Z轴为旋转轴旋转平面坐标系，顺时针，弧度表示
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(0, 0, 50, 50);
// 3、重置矩阵
ctx.resetTransform();
ctx.fillStyle = 'red';
ctx.translate(100, 100);
ctx.fillRect(0, 0, 50, 50);
ctx.translate(50, 50);
// 4、scale(x, y) => (水平方向的缩放因子, 垂直方向的缩放因子)
ctx.scale(2, 2);
ctx.fillRect(10, 10, 50, 50);
ctx.translate(10, 10);
ctx.transform(1, 0, 0, 1, 0, 0);
```
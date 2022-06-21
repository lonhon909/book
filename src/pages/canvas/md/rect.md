# rect - 矩形

- `rect` - 创建矩形，需要填充或描边才会显示
- `fillRect` - 创建矩形并填充
- `strokeRect` - 创建矩形并描边
- `clearRect` - 清空给定矩形内的指定像素，这块区域会变的完全透明

```js
// 1、创建矩形
ctx.rect(10, 10, 100, 100);
// 填充
ctx.fill();
// 2、创建并填充，相当于 rect() + fill();
ctx.fillRect(150, 20, 100, 100);
// 3、创建并描边
ctx.strokeRect(300, 30, 100, 100);

// 4、清空给定矩形内的指定像素，这块区域会变的完全透明
ctx.clearRect(40, 40, 30, 20);
```
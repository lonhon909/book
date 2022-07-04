# drawImage

- `drawImage(image, x, y)`
    + `image` 要使用的图像
    + `x, y` 放置在画布上的坐标
- `drawImage(image, x, y, width, height)`
    + `x, y` 放置在画布上的坐标
    + `width, height` 图像呈现在画布上的尺寸
- `drawImage(image, sx, sy, swidth, sheight, x, y, width, height)`
    + `sx, sy` 开始裁剪图像的位置，相对于图像的坐标，图像右上角为(0, 0)
    + `swidth, sheight` 裁剪尺寸，相对于图像
    + `x, y` 放置在画布上的坐标
    + `width, height` 图像呈现在画布上的尺寸

```js
const image = <HTMLImageElement>document.querySelector('.image');
image.onload = function() {
    ctx.drawImage(image, 0, 0);
    ctx.drawImage(image, 250, 0, 200, 100); // 可拉伸或缩小
    ctx.drawImage(image, 0, 0, 100, 100, 250, 200, 100, 100); // 裁剪
}
```
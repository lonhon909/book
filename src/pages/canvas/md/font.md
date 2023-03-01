# font -文本

- `font` - 设置或返回文本内容的当前字体属性；如：`normal bold 30px sans-serif`
- `textAlign` - 设置水平对齐方式；如：`center`，这样文本就会处理开始绘制点的左右两边
- `textBaseline` - 设置绘制文本时使用的当前文本基线
- `fillText` - 描边的形式绘制文本
- `strokeText` - 填充的形式绘制文本
- `measureText` - `canvas`中没有自动换行的`API`，这个函数用于获取指定文本的宽度，这样可以手动拆分文本

```js
// 语法与 CSS font 属性相同
ctx.font = 'normal bold 30px sans-serif';
// 设置或返回在绘制文本时的当前文本基线，文本将基线对齐（竖直方向）
ctx.textBaseline = 'middle';
// 描边的形式绘制文本 (text, x, y, maxWidth?) => (绘制的文本, 开始绘制文本的 x 坐标位置, 开始绘制文本的 y 坐标位置, 可选。允许的最大文本宽度)
ctx.strokeText('Hello world!', 0, 30);

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(200, 150);
ctx.stroke();

// 设置字体颜色
ctx.fillStyle = 'red';
// 基于开始绘制起点水平方向的对齐方式
ctx.textAlign = 'center';
// 填充的形式绘制文本
ctx.fillText('Hello world!', 200, 100);

ctx.fillText('居中', 200, 70);
// 渐变
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, 'magenta');
gradient.addColorStop(0.5, 'blue');
gradient.addColorStop(1, 'red');
ctx.fillStyle = gradient;
ctx.textAlign = 'left';
ctx.fillText('Hello world!', 0, 150);

/* ***** 计算字体的宽度 ***** */
const text = '该方法返回包含一个对象，该对象包含以像素计的指定字体宽度；如果您需要在文本向画布输出之前，就了解文本的宽度，那么请使用该方法';
ctx.font = 'normal bold 8px sans-serif';
ctx.textAlign = 'left';
// canvas是不能自动换行的，需要根据measureText获取指定字体宽度，自行截取成多个文本再手动绘制
ctx.fillText(text, 0, 250);

ctx.font = 'normal bold 30px/60px sans-serif';
const arr = [];
let start = 0, i = 1;
for (; i <= text.length; i++) {
    // measureText 获取指定文本的宽度
    if (Math.ceil(ctx.measureText(text.substring(start, i)).width) > canvas.width) {
        arr.push(text.substring(start, i - 1));
        i--;
        start = i;
    }
}
if (start < i) {
    arr.push(text.substring(start, i - 1));
}

arr.forEach((item, index) => {
    ctx.fillText(item, 0, 300 + index * 60);
})
```
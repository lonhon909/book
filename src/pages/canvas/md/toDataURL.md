# toDataURL - 保存图片

```js
/**
 * 1、toDataURL
 * @param { DOMString } 指定格式，默认 image/png
 * @param { Number } 可选 0-1 之间，当图片格式为 image/jpeg 或者 image/webp 时有效
 */
const url = canvas.toDataURL('image/jpeg', 0.9);
const image = new Image();
image.src = url;
this.$el.appendChild(image);

/**
 * 2、toBlob
 * @param { Function } 回调函数
 * @param { DOMString } 可选，指定格式，默认 image/png
 * @param { Number } 可选 0-1 之间，当图片格式为 image/jpeg 或者 image/webp 时有效
 */
canvas.toBlob((blob) => {
    const image = new Image();
    const url = URL.createObjectURL(blob);
    image.onload = function() {
        URL.revokeObjectURL(url);
    }
    image.src = url;
    this.$el.appendChild(image);
}, 'image/jpeg', 0.9);
```
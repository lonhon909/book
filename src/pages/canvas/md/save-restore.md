# save - 状态

- `save` - 使用栈保存当前的绘画样式状态
- `restore` - 恢复到最近的绘制样式状态，此状态是通过 `save()` 保存到”状态栈“中最新的元素

```js
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 50, 50);
// 保存状态1
ctx.save();
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 50, 50);
// 保存状态2
ctx.save();
ctx.fillStyle = 'yellow';
ctx.fillRect(100, 100, 50, 50);
// 还原状态2
ctx.restore();
ctx.fillRect(150, 50, 50, 50);
// 还原状态1
ctx.restore();
ctx.fillRect(200, 0, 50, 50);
```
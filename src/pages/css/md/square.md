# `css` 实现固定设置宽高比

```css
/* 垂直方向上的内外边距使用百分比做单位时，是基于包含块的宽度来计算的 */
.app {
    width: var(--width);
    background-color: blanchedalmond;
}
/* 方法一: padding hack */
.container {
    --ratio: 5 / 4;
    padding-top: calc(100% * (1 / (var(--ratio))));
}
/* 方法二: css新属性 宽高比（纵横比） */
@supports(aspect-ratio: 1) {
    .container {
        aspect-ratio: var(--ratio);
        padding-top: initial;
    }
}
```

```html
<div class="app" style="--width:200px">
    <div class="container"></div>
</div>
```

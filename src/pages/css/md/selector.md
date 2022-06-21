# CSS 选择器

### 1、增加样式权重,

+ 通常的做法是，将父类选择器加入其中，但其实可以`重复使用自身的选择增`加权重

```html
<div class="css-selector">
    <div class="box"></div>
    <input type="text" id="text" />
</div>
```
```css
/* 重复使用选择器增加权重 */
.box.box {
    /* 样式权重就增加到 20 */
}
#text#text {
    /* 样式权重就增加到 200 */
}
```

### 2、避免嵌套

+ `css` 选择器是从右往左匹配的，如：`.selector div {}` 先匹配页面上所有的 `div`，在匹配有 `.selector` 类名的元素，效率低下

```css
.css-selector div {
    /* 效率低 */
}
/* 正确的做法是给这个 div 加上类名 如 css-box */
.css-box {}
```

### 3、css 选择器过滤技术

```html
<input type="text" @input="filterItem" />
<ul class="selector-list">
    <li
        v-for="item in list"
        :key="item"
        :data-search="item"
        class="selector-item">{{item}}</li>
</ul>
```

```js
// 动态创建一个 style 插入body
filterItem(e) {
    const value = e.target.value.trim();
    style.innerHTML = value ? `[data-search]:not([data-search*='${value}']){display:none;}` : '';
}
```

### 4、水平居中布局与滚动条出现时页面跳动了一下

```html
<div class="layer-outer">
    <div class="app"></div>
</div>
```

```css
.app {
    width: 1200px;
    /* 水平居中 */
    margin: 0 auto;
}

.layer-outer {
    /* 100vw 是包含滚动条的宽度； 100% 只占据父元素有效的宽度，100vw - 100% 表示滚动条的宽度，这样左右两边都有一个滚动条的宽度或者没有滚动条时都为0 */
    margin-left: calc(100vw - 100%);
}
```
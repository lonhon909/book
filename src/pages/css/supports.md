# css原生方法

+ css特新查询，用来检测浏览器UA是否支持CSS的属性值
  
```css
/* 基本操作 */
@supports (display: grid) {
    .app {
        background-color: blue;
    }
}
/* 布尔操 */
/* 同时测试多个CSS属性的支持情况 */
@supports (display: grid) and (writing-mode: vertical-rl) and ... {
    .app {
        background-color: blue;
    }
}
/* 只需要有一个true，就会应用块中的样式 */
@supports (aspect-ratio: 1) or (writing-mode: vertical-rl) {
    .app {
        background-color: blue;
    }
}
/* not CSS属性不支持时应用块中的样式 */
@supports not (aspect-ratio: 1) {
    .app {
        background-color: blue;
    }
}
/* or and 混合使用 */
@supports (aspect-ratio: 1) or ((display: grid) and (writing-mode: vertical-rl)) {
    .app {
        background-color: blue;
    }
}
```

# 网格布局 `grid`

+ `flex` 弹性布局-一维布局
+ `grid` 网格布局-二维布局

## 容器属性（`container`）& 项目属性（`item`）

属性名称|属性类型|说明
|:--|:--|:--|
`display` | 容器属性 | 指定容器为网格布局 grid（容器为块元素）/inline-grid（容器为行内元素）
`grid-template-columns` | 容器属性 | 设置列的宽度 100px（绝对单位）/35%（百分比）
`grid-template-rows` | 容器属性 | 设置行的高度 100px（绝对单位）/35%（百分比）
`grid-row-gap` | 容器属性 | 设置行间距
`grid-column-gap` | 容器属性 | 设置列间距
`grid-gap` | 容器属性 | 行间距 列间距缩写
`grid-auto-flow` | 容器属性 | 设置项目的排列方式 row/column/row dense/colmun dense
`justify-items` | 容器属性 | 设置项目左右对齐方式 start/center/end/stretch
`align-items` | 容器属性 | 设置项目上下对齐方式 start/center/end/stretch
`place-items` | 容器属性 | 简写
`justify-content` | 容器属性 | 设置整个内容区域在容器里面的水平位置
`align-content` | 容器属性 | 设置整个内容区域在容器里面的竖直位置
`place-content` | 容器属性 | 简写

## 容器属性

```css
.container {
    display: grid; /* 设置容器为网格布局 */
    display: inline-grid;

    grid-template-columns: 100px 120px 180px;
    grid-template-columns: 25% 25% 50%; /* 百分比 */
    /* 1、repeat函数 */
    grid-template-columns: repeat(3, 100px);
    grid-template-columns: repeat(2, 100px 20px auto); /* 重复某种模式 */
    /* 2、auto-fill 关键字 项目宽度固定，但是容器宽度不固定 */
    grid-template-columns: repeat(auto-fill, 120px); /* 根据容器宽度自动填充 */
    /* 3、fr 关键字 */
    grid-template-columns: 120px 1fr 2fr; /* 第三列是第二列宽度的两倍 */
    grid-template-columns: repeat(12, 1fr); /* 等宽12列 */
    /* 4、auto 关键字 */
    grid-template-rows: 100px 100px auto;

    grid-template-rows: 25% 25% 50%; /* 百分比 */
    grid-template-rows: repeat(3, auto);
    grid-template-rows: repeat(2, 100px 20px auto); /* 重复某种模式 */
}
```

```css
.container {
    /* 默认，先排满行 */
    /*  1 2 3
        4 5 6
        7 8 9
    */
    grid-auto-flow: row;
    /* 先排满列 */
    /*  1 4 7
        2 5 8
        3 6 9
    */
    grid-auto-flow: column;
    /* 先排满行，尽可能紧密排列 */
    grid-auto-flow: row dense;
    /* 先排满列，尽可能紧密排列 */
    grid-auto-flow: column dense;
    /* 该属性是整个内容区域在容器里面的水平位置（左中右），类似flex中的justify-content */
    justify-content: center; /* start | end | center | stretch | space-around | space-between | space-evenly */
    /* 该属性是整个内容区域在容器里面的垂直位置（上中下） */
    align-content: space-between;
}
```

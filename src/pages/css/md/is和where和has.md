## is、where、has 伪类函数

1、 `:is`和`:where`伪类函数以选择器列表为参数，解析时以选择器的每一项与后代选择器组成完整的一条规则，但`:is()`组成的规则的权重是按照参数中最高优先级选择器决定的，而`:where()`权重始终为`0`;

以下案例权重为`11`，参数中最高优先级选择器是`.active`权重为`10`，元素选择器`li`权重为`1`，整个规则权重为`11`

```css
/* 选择器列表作为参数，该规则总权重为11，最高的.active类选择器权重为10 + 元素选择器li权重为1*/
:is(ul, ol, .active) li {
    color: red;
}
/* 相当于，但权重不一样 */
ul li,
ol li,
.active li {
    color: red;
}
```

举个例子
```html
<!-- html -->
<ul>
    <li>权重</li>
    <li class="main">权重</li>
</ul>
<!-- css -->
<style>
:is(ul, .active) li {/* 权重11，最终字体颜色为 blue */
    color: blue;
}
ul li {
    color: red;
}
ul .main { /* 权重11，覆盖前面 */
    color: green;
}
</style>
```

效果展示，`:is`参数选择器列表中类选择器`.active`权重为10，即使没有匹配到任意元素，也会使规则生效

![b.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d625e6caf0e048ccb50e05663e01473e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=316&h=107&s=1229&e=png&b=ffffff)

2、 `:where`与`:is`唯一的不同是权重的处理，`:where()`的权重为0

```css
/* 权重为 0 */
:where(div, p) {}
/* 权重为 0 + 1 = 1 */
:where(div, p) span {}
```

举个例子
```html
<!-- html -->
<ul>
    <li class="active">权重</li>
</ul>
<!-- css -->
<style>
ul li {/* 最终字体颜色为 red */
    color: red;
}
:where(ul, .active) li {/* 权重1 */
    color: blue;
}
</style>
```

效果展示，`:where`伪类函数权重始终为`0`，上述案例中`.active`匹配到了权重也是`0`

![c.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d506b614220c48bca7d54b6266567c88~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=320&h=100&s=852&e=png&b=ffffff)

3、 `:has`伪类函数参数传递一个选择器列表，匹配一个符合参数选择器列表的元素

```css
/* 匹配 h1，但此 h1 必有一个相邻兄弟节点 h2 或 h3 */
h1:has(+ h2, + h3) {}

/* 匹配 h1 h2 h3，但此匹配元素必有一个相邻兄弟节点为h1或h2或h3 */
:is(h1, h2, h3):has(+ :is(h1, h2, h3)) {}
```

举个例子
```html
<!-- html -->
<body>
   <p><u>p1</u></p>
   <p><i>p2</i></p>
   <p><b>p3</b></p>
</body>
<!-- css -->
<style>
/* 匹配 p 标签，此p标签有后代元素 u 或 i */
p:has(u, i) {
    color: red;
}
</style>
```
效果展示，最终匹配到的第一个第二个`p`标签，第三个`p`标签没有`u`或`i`后代元素则不会被匹配到

![效果展示.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7121740a6834ecc8fe7e0b11d3f8226~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=286&h=133&s=1353&e=png&b=ffffff)

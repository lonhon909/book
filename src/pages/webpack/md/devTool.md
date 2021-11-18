# `devtool` -- Source Map

```html
<!-- 查看webpack文档 -->
<a href="https://v4.webpack.docschina.org/configuration/devtool/#devtool">devTool</a>
```

- `source-map` -- 生成 `.map` 文件，可以查看错误代码准确信息和源代码的错误位置
- `inline-source-map` -- 不会生成单独的 `.map` 文件，而是将 map 信息内联进 js 文件，可以查看错误代码准确信息和源代码的错误位置
- `hidden-source-map` -- 生成 `.map` 文件，可以查看错误代码准确信息，但是无法查看源代码的位置
- `eval-source-map` -- 不会生成单独的 `.map` 文件，而是将 map 信息内联进 js 文件，可以查看错误代码准确信息和源代码的错误位置

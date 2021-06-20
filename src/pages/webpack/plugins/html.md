### HtmlWebpackPlugin

```js
npm i -D html-webpack-plugin

const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    ...
    plugins: [
        // 要生成多个HTML文件，请在插件数组中多次声明插件
        new htmlWebpackPlugin(),

        new htmlWebpackPlugin({
            title: '我是插件生成的标题', // 生成html文件的标题,title标签内容（模板的优先级更高）
            filename: 'app.html', // 就是html文件的文件名，默认是index.html, 还可以插入路径：如： html/app.html
            template: './index.html', // 指定你生成的文件所依赖哪一个html文件模板，模板类型可以是html、jade、ejs等
            // true 默认值，script标签位于html文件的 body 底部
            // body script标签位于html文件的 body 底部
            // head script标签位于html文件的 head中
            // false 不插入生成的js文件，这个几乎不会用到的
            inject: 'head',
            favicon: './60.png', // 给你生成的html文件生成一个 favicon ,值是一个路径
            // chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件
            // chunks: [], // 如果你没有设置chunks选项，那么默认是全部显示
            excludeChunks: [], // 排除掉一些js
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            }
        })
    ]
}
```
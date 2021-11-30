# 编写一个 `loader`

[多图详解，一次性搞懂Webpack Loader](https://juejin.cn/post/6992754161221632030)

1、编写 `loader`

`webpack` 运行在 `node` 环境中，`loader` 是一个 `node` 模块，导出一个函数

```js
/**
 * @param {String|Buffer} source source 源文件的内容或者上一个loader的输出
 * @param {content} map 可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据
 * @param meta 数据，可以是任何内容
 */
function webpackLoader(source, map, meta) {
    // 这里对 source 进行处理
    return source;
}

module.exports = webpackLoader;
```

2、使用 `loader`

```js
// webpack.config.js
module.exports = {
    entry: {},
    output: {},
    module: {
        rules: [
            {
                test: /\.txt$/,
                // 1、直接引用
                use: {
                    // loader 的路径
                    loader: path.resolve(__dirname, 'loaders/foo-loader.js'),
                    options: {/* 配置参数 */}
                },
                // 2、配置resolveLoader
                use: {
                    loader: 'foo-loader',
                    options: {/* 配置参数 */}
                }
            }
        ]
    },
    // 告诉 webpack 该去那个目录下找 loader 模块
    resolveLoader: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'loaders')
        ]
    }
}
```

3、同步 loader

```js
module.exports = function(source) {
    // 1、直接return返回结果，但是这种无法返回多参数
    return source;
    // 2、this.callback
    this.callback(null, source);
    return;
}
// 如果是处理顺序排在最后一个的 loader，那么它的返回值将最终交给 webpack 的 require，换句话说，它一定是一段可执行的 JS 脚本
module.exports = function (source) {
    // 需要增加 module.exports
    return 'module.exports = ' + JSON.stringify(source);
}

```

4、异步 `loader`

```js
module.exports = function(source) {
    const callback = this.async();

    setTimeout(() => {
        callback(null, source)
    }, 500)
}
```

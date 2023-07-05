# SplitChunksPlugin

webpack@4以后的版本，弃用了许多webpack@3的插件
+ 分离打包js文件的插件 webpack.optimize.CommonChunkPlugin() 改用 optimization.splitChunks

```js
// webpack@4以后的版本，弃用了许多@3的插件，其中包括：
// 分离打包js文件的插件 webpack.optimize.CommonChunkPlugin() 改用 optimization.splitChunks
// 压缩js文件的插件 webpack.optimize.UglifyJsPlugin();
// 定义产品上线环境webpack.optimize.DedupePlugun()；
// 分离css文件插件extract-text-webpack-plugin();
// css文件压缩插件 CssMinimizerPlugin()；
module.exports = {
    optimization: {
        splitChunks: {
            // 指定用于生成名称的分隔符--默认(~)，经测试 webpack4.46.0 有效，但是 webpack5 配置无效，webpack5都是中横杠
            automaticNameDelimiter: '~',
            /**
             * async(默认) -- 只对异步代码做分割
             * initial -- 只对同步代码做分割
             * all -- 同步异步都做代码分割
             */
            chunks: 'async',
            // 按需加载时的最大并行请求数--默认（30），假如代码分割太多了，会出现网页一加载同时加载 num 个以上的js，不符合配置需求，这个时候 webpack 只会分割 num 个类库，超过将不会再分割
            maxAsyncRequests: 10, // num = 10
            // 默认（1）-- 模块引入的数量小于2就不做代码分割
            minChunks: 2,
            // 默认 20000 生成 chunk 的最小体积（以 bytes 为单位）
            minSize: 20000,
            // 告诉 webpack 尝试将大于 maxSize 个字节的 chunk 再次分割成更小的部分
            maxSize: 50000,
            // 缓存组可以继承和/或覆盖来自 splitChunks.* 的任何选项；假如需要将jquery库与lodash库打包成一个vendors.js，当遇到jquery符合vendors配置组时它不着急生成vendors.js文件，它会先放到这个vendors组里缓存着，当它遇到别的模块（如：lodash）也符合vendors配置组时，它也会先缓存着，当最总所有的模块都分析好了之后，把符合vendors配置组的模块打包到一起去，把符合default配置组的模块打包到一起去。
            cacheGroups: {
                vendors: {
                    // 匹配缓存组选择的模块
                    test: /[\\/]node_modules[\\/]/,
                    // 一个模块可以属于多个缓存组。优化将优先考虑具有更高 priority（优先级）的缓存组
                    priority: -10,
                    // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
                    reuseExistingChunk: true,
                }
            }
        }
    }
}
```
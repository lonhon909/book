const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, '../src'),
    entry: './index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 50000,
            automaticNameDelimiter: '~',
            // 缓存组可以继承和/或覆盖来自 splitChunks.* 的任何选项
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
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        // 从 webpack v4 开始，CommonsChunkPlugin 移除了，改用 optimization.splitChunks
        /* new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }), */
    ]
}
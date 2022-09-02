const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    context: path.resolve(__dirname, '../src'),
    entry: './index.js',
    output: {
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}
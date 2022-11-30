const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        vue: ['vue', 'vuex', 'vue-router'],
        // element: ['element-ui']
    },
    output: {
        path: path.resolve(__dirname, '../dll'),
        filename: '[name].dll.js',
        // 最终会在全局暴露出一个[name]_dll的对象
        library: '[name]_dll',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: '[name]_dll',
            path: path.resolve(__dirname, '../dll/manifest.json'),
        })
    ]
};
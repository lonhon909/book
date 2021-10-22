# clean-webpack-plugin

```js
npm i -D clean-webpack-plugin

// webpack.config.prod.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    ...
    plugins: [
        new CleanWebpackPlugin(),
        new CleanWebpackPlugin({
            // 配置哪些文件是否需要清除，不需要清除的 -- !+文件名
            cleanOnceBeforeBuildPatterns: ['!a.js', '!aa/**']
        }),
    ]
}
```

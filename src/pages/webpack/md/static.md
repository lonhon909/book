# 静态资源 static

`npm i -D copy-webpack-plugin@9` 将单个文件或整个目录复制到构建目录

```vue
// 用法
<template>
    <ul class="static-image">
        <li v-for="item in 6">
            <img :src="`../../../../static/${item+1}.jpeg`" alt="">
        </li>
    </ul>
</template>
```

```js
// webpack.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: path.resolve(__dirname, '../static'), to: 'static' }
        ]
    }),
]
```

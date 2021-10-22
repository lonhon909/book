# webpack 安装

```js
// 在webpack 3中，webpack本身和它的CLI以前都是在同一个包中，但在第4版中，他们已经将两者分开来更好地管理它们
npm i -D webpack webpack-cli

// 拆分配置文件用到合并
npm i -D webpack-merge

// 配置环境变量（后面用到）
npm i -D cross-env
```

```json
// package.json
"scripts": {
    ...
    "dev": "cross-env NODE_ENV=development webpack --mode=development --config config/webpack.config.dev.js",
    "build": "cross-env NODE_ENV=production webpack --mode=production --config config/webpack.config.prod.js"
},
```

根目路创建 `config` 文件夹

```js
// config下创建js文件
webpack.config.base.js
webpack.config.dev.js
webpack.config.prod.js
```

```js
// webpack.config.base.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist')
    }
};

// webpack.config.dev.js
const { merge } = require('webpack-merge');
const configBase = require('./webpack.config.base');
module.exports = merge(configBase, {
    mode: 'development'
})

// webpack.config.prod.js
const { merge } = require('webpack-merge');
const configBase = require('./webpack.config.base');
module.exports = merge(configBase, {
    mode: 'production'
})
```

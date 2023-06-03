# 配置`babel-loader`

```js
npm i -D babel-loader @babel/core @babel/preset-env
// class语法
npm i -D @babel/plugin-proposal-class-properties 
// 如果需要使用 genetator，无法直接使用 babel 进行转换，因为会将 generator 转换为一个 regeneratorRuntime
npm i -D @babel/plugin-transform-runtime 
npm i -S @babel/runtime
// 如果需要使用 ES6/7 中对象原型提供的新方法，babel 默认情况无法转换，即使用了 plugin-transform-runtime 的插件也不支持转换原型上的方法，需要使用 polyfill
npm i -S @babel/polyfill
```

```js
module.exports = {
  module: {
    rules: [
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        // 官方推荐在.babelrc中配置
        options: {
          presets: ['@babel/env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      exclude: /node_modules/
    ]
  }
}
```

```js
// .babelrc
{
    // @babel/preset-env只会处理语法（如：let/const等），不会处理api（如：includes等），配置项useBuiltIns告诉babel如何处理api，默认false，即不处理；设置为entry，同时在源代码的最上方手动引入 @babel/polyfill 这个库，打包时会将polyfil全部打入；设置为usage，不需要手动引入polyfill，会自动按需引入
    // "presets": ["@babel/preset-env"],
    "presets": [
        ["@babel/preset-env", { "useBuiltIns": "entry", "loose": true }]
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }], // 装饰器

        // NOTE: This plugin is included in @babel/preset-env, in ES2022，默认-false，直接在@babel/preset-env中配置也行
        ["@babel/plugin-proposal-class-properties", { "loose": true }], // 这个插件主要作用是用来编译类的

        // https://zhuanlan.zhihu.com/p/147083132
        "@babel/plugin-transform-runtime",

        
    ]
}
```

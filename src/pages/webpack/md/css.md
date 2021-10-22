# 处理CSS

```js
// 按需求选择
npm i -D css-loader style-loader
npm i -D less less-loader
npm i -D sass-loader node-sass
// 自动添加兼容前缀
npm i -D postcss-loader autoprefixer
```

```js
// webpack.config.base.js
module.exports = {
    module: [
        rules: [
            {
                // 配置的是用来解析.css文件的loader，css-loader、style-loader
                // loader的顺序 默认是从右往左，从上到下
                // css-loader 解析 @import 这种语法的
                // style-loader 将css引入html的head中 style标签
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'] // webpack底层调用这些loader的顺序是从右向左
            },
            {
                // npm i -D less less-loader
                test: /\.less$/,
                use: ['style-loader', 'css-loader','postcss-loader', 'less-loader']
            },
            {
                // npm i -D sass-loader node-sass
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    ]
}
```

根目录下创建 `postcss.config.js` 文件

```js
// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')({
            // 编译时可能会报警告（**直接将browsers入参字段改为overrideBrowserslist即可去除警告**）
            browsers: [
                // 加这个后可以出现额外的兼容性前缀
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        })
    ]
}

// 推荐的做法是
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
// 在 package.json 添加browserslist
{
  ...
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
```

## `css` 抽离成单独的文件， 通过link标签引入

> 推荐在 `production` 环境下使用 `css` 分离，这样可以使用 `CSS/JS` 文件的并行加载；对于 `development` 模式，你可以使用 `style-loader`

插件会将 `CSS` 提取到单独的文件中，为每个包含 `CSS` 的 `JS` 文件创建一个 `CSS` 文件，并且支持 `CSS` 和 `SourceMaps` 的按需加载

```js
// 插件基于 webpack v5 的新特性构建，并且需要 webpack 5 才能正常工作
npm i -D mini-css-extract-plugin

// webpack.config.base.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production"; // npm i -D cross-env

module.exports = {
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [devMode ? 'style-loader' : {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // 为 CSS 内的图片、文件等外部资源指定一个自定义的公共路径
                        publicPath: './'
                    }
                }, 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        }),
    ].concat(devMode ? [] : [
        new MiniCssExtractPlugin({
            // 类似于 webpackOptions.output 中的选项
            filename: '[name].css',
            // 非入口的 chunk 文件名称
            chunkFilename: '[id].css',
        })
    ])
}
```

## 开启CSS压缩

```js
// terser-webpack-plugin是js压缩插件，因为单独配置压缩css会覆盖掉js的压缩，所以此处需要一起配置
npm i -D css-minimizer-webpack-plugin terser-webpack-plugin

const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserJSPlugin({})
        ],
    },
}
```

## 提取所有的 CSS 到一个文件中

```js
module.exports = {
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserJSPlugin({})
        ],
        // 提取所有的 CSS 到一个文件中
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true,
                }
            },
        },
        // 基于入口提取 CSS
        splitChunks: {
            ...(Object.keys(entrys).reduce((total, item) => {
                total[item + 'Styles'] = {
                    type: "css/mini-extract",
                    name: item,
                    chunks: (chunk) => chunk.name === item,
                    enforce: true,
                }
                return total;
            }), {}),

            /* fooStyles: {
                type: "css/mini-extract",
                name: "styles_foo",
                chunks: (chunk) => {
                    return chunk.name === "foo";
                },
                enforce: true,
            },
            barStyles: {
                type: "css/mini-extract",
                name: "styles_bar",
                chunks: (chunk) => {
                    return chunk.name === "bar";
                },
                enforce: true,
            }, */
        }
    },
}
```

# webpack-dev-server

```js
// webpack5
npm i -D webpack-dev-server

// package.json
"dev": "webpack serve --mode=development --config config/webpack.config.dev.js"

// webpack.config.dev.js
module.exports = {
    devServer: {
        // 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        client: {
            overlay: true,
            // 在浏览器中以百分比显示编译进度
            progress: true,
        },
        hot: true,
        open: false,
        port: 8080,
        proxy: {
            '/api': {
                // 对 /api/users 的请求会将请求代理到 http://localhost:3000/api/users
                target: 'http://localhost:8081',
                changeOrigin: true,
                // 重写路径
                pathRewrite: { '^/api': '' },
            },
        },
    }
}
```

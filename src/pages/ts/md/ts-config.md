# TypeScript

```js
npm i -D typescript ts-loader

// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    }
}
```

## 清理 dist

```js
// webpack 5.20.0+
output: {
    clean: true

    clean: {
        keep: /ignored\/dir\//, // 保留 'ignored/dir' 下的静态资源
    }
}
```

```js
// webpack 5.20.0-
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

plugins: [
    new CleanWebpackPlugin()
]
```
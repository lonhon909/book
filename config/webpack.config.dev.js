const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

const devConfig = merge(baseConfig, {
    mode: "development",
    devServer: {
        contentBase: 'dist'
    }
});

module.exports = devConfig;

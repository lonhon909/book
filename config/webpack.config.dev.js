const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

const devConfig = merge(baseConfig, {
    mode: "development",

    devtool: 'eval-cheap-source-map',

    devServer: {
        contentBase: 'dist',
        port: 8081
    }
});

module.exports = devConfig;

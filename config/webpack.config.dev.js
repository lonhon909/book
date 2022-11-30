const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.config.base.js');

const devConfig = merge(baseConfig, {
    mode: "development",

    devServer: {
        static: 'dist',
        port: 8083,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
});

module.exports = devConfig;

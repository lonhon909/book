const { merge } = require('webpack-merge');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
// const CopyHtmlToBack = require('./plugin');
const baseConfig = require('./webpack.config.base.js');

const prdConfig = merge(baseConfig, {
    mode: 'development',

    plugins: [
        new CleanWebpackPlugin(),
        // new CopyHtmlToBack(['index.html'])
    ]
});

if (process.env.npm_config_report) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

    prdConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = prdConfig;

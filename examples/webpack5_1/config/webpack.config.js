const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 提取css到单独文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 开启css压缩，生产环境mode=production会开启js压缩，但是这个css压缩会造成js压缩失效，此时需要单独手动压缩js
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// js压缩
const TerserJSPlugin = require('terser-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name]-[contenthash].js',
        // publicPath: '../static',
        clean: true,
        assetModuleFilename: 'assets/[name][ext][query]'
    },

    optimization: {
        
        splitChunks: {
            chunks: 'all',
            minSize: 3 * 1024,
            minChunks: 1,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors'
                },
                vue: {
                    test: /[\\/]node_modules[\\/]vue/,
                    priority: 1,
                    name: 'vue_vuex_vue_router'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            }
        },
        minimizer: [
            // css 压缩
            new CssMinimizerPlugin(),
            // js压缩
            new TerserJSPlugin({
                extractComments: false
            })
        ],
    },
    // 配置模块如何解析
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.vue', '.less', '.css', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
            'static': path.resolve(__dirname, '../static'),
        }
    },
    // 外部扩展，下面jquery不会打包进最终 bundle 中（一般是通过 CDN 引入使用）
    externals: {
        jquery: 'jQuery',
    },

    devServer: {
        static: './dist'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                // loader: 'url-loader',
                // options: {
                //     limit: 1000,
                //     name: 'fonts/[name].[contenthash:8].[ext]',
                //     esModule: false
                // },
                // type: 'javascript/auto'
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]_[hash][ext][query]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                // use: [
                //   {
                //     loader: 'url-loader',
                //     options: {
                //       name: '[name].[ext]',
                //       publicPath: 'assets',
                //       outputPath: 'assets',
                //       limit: 10000
                //     }
                //   }
                // ],
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024
                    }
                },
                generator: {
                    filename: 'images/[name]_[contenthash][ext][query]'
                }
                // type: 'javascript/auto'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

        new VueLoaderPlugin(),

        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
        }),

        new CopyPlugin({
            patterns: [
                { from: 'static/video', to: 'video' },
                { from: 'static/pdf', to: 'pdf' },
                'static/txt'
            ]
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("development"),
            'HOST': JSON.stringify("https://testportal.comein.cn/home/index")
        }),

        // 全局变量，会打入最终的bundle中，使用时不用写 import moment from 'moment'，直接使用变量即可
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            moment: 'moment'
        })
    ].concat(process.env.npm_config_report ? [new BundleAnalyzerPlugin()] : [])
};

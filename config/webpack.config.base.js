const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production"; // npm i -D cross-env

function resolve(dir) {
    return path.resolve(__dirname, '..', dir);
}

const packageName = require('../package').name;

module.exports = {
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserJSPlugin({})
        ],
    },
    entry: {
        vuejs: {
            filename: 'vue.js',
            import: ['vue', 'vuex', 'vue-router']
        },
        main: {
            dependOn: 'vuejs',
            import: './src/main.js',
        },
    },
    // devtool: 'cheap-source-map',
    output: {
        filename: 'js/[name].[chunkhash].js',
        path: resolve('dist'),
        publicPath: '/',
        library: `${packageName}-[name]`,
        libraryTarget: 'umd', // 把微应用打包成 umd 库格式
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
    resolveLoader: {
        modules: [
            'node_modules',
            resolve('src/pages/webpack/loader')
        ],
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: [
                    {
                        // 自定义loader
                        loader: 'foo-loader',
                        options: {
                            l: 100
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.jsx?/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.md$/,
                use: [
                    'vue-loader',
                    {
                        loader: 'vue-dotmd-loader',
                        options: {
                            wrapperName: 'DemoBlock', // Define the demo package component (please register the component globally). If it is empty, only the demo will be rendered.
                            fileDemoNamePerfix: 'FileDemo', // Name prefix of the demo component file
                            blockDemoNamePerfix: 'BlockCodeDemo',// Name prefix of Code block demo component
                            fileDemoTag: 'demo:vue', // File demo tag; format: [demo:vue](filePath)
                            blockDemoTag: 'demo:vue', // Block code demo tag; format: ````html demo:vue code ````
                            includeCodeTag: 'include:code', // Include code tag; format: [include:code](filePath)
                            includeRawTag: 'include:raw', // Include raw source tag; format: [include:raw](filePath)
                            dest: false, // ouput file; true/false/function
                            dest (code, contextPath, resourcePath) {}, // Custom write file
                            markdown: { // markdown-it options see: https://github.com/markdown-it/markdown-it#init-with-presets-and-options
                                options: {
                                    html: true
                                },
                                notWrapper: false,
                                init (md) {
                                    md.use('markdown-it') // Add markdown-it plug-in
                                }
                            }
                        }
                    }
                ]
            },
            // {
            //     // https://webpack.docschina.org/guides/asset-modules/
            //     test: /\.txt$/,
            //     type: 'asset/source',
            // },

            {
                test: /\.css$/,
                use: [devMode ? 'style-loader' : {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // 为 CSS 内的图片、文件等外部资源指定一个自定义的公共路径
                        publicPath: '../'
                    }
                }, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [devMode ? 'style-loader' : {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // 为 CSS 内的图片、文件等外部资源指定一个自定义的公共路径
                        publicPath: '../'
                    }
                }, 'css-loader', 'less-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[contenthash:8].[ext]',
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: '[name].[ext]',
                      publicPath: 'assets',
                      outputPath: 'assets',
                      limit: 10000
                    }
                  }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.tsx', '.ts', '.vue', '.less', '.css', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'echart': resolve('src/assets/js/echarts.js'),
            'static': resolve('static')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '一样标题',
            filename: 'index.html',
            template: 'index.html',
            favicon: './zhishi.png'
        }),

        new VueLoaderPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static'), to: 'static' }
            ]
        }),

    ].concat(devMode ? [] : [
        new MiniCssExtractPlugin({
            // 类似于 webpackOptions.output 中的选项
            filename: 'css/[name].[contenthash:8].css',
            // 非入口的 chunk 文件名称
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ])
};

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.resolve(__dirname, '..', dir);
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: '[name].[chunkhash:8].js',
        path: resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
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
                                html: false
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

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: '[name].[ext]',
                      publicPath: 'static',
                      outputPath: 'static',
                      limit: 10000
                    }
                  }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.less', '.css', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '一样标题',
            filename: resolve('dist/index.html'),
            template: 'index.html',
            favicon: './star.png'
        }),

        new VueLoaderPlugin()
    ]
};

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        jQuery: { import: 'jquery' },
        moment: 'moment',
        main: {
            import: './src/main.js',
            dependOn: ['jQuery', 'moment']
        }
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
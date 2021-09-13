const path = require('path');

module.exports = (env, argv) => {
    console.log(1, env)
    console.log(2, argv)
    return {
        mode: 'development',
        entry: './src/main.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist')
        }
    }
}
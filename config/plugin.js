const moment = require('moment');
const child_process = require('child_process');

module.exports = class CopyHtmlToBack {
    constructor(options) {
        this.options = options || ['index.html'];
    }
    apply(compiler) {
        compiler.hooks.emit.tap('CopyHtmlToBack', (compilation) => {
            const assets  = compilation.assets;
            const files = this.options.filter((item) => assets[item]);
            const date = moment().format('YYYYMMDDHHmmss');
            files.forEach((data) => {
                const content = assets[data].source();
                const version = child_process.execSync('git branch').toString().match(/(?<=\*\s).+(?=\n)/)[0];
                const result = content.replace('<meta charset="UTF-8">', `<!-- branch ${version} --><!-- ${moment().format('YYYY-MM-DD HH:mm')} --><meta charset="UTF-8">`);
                compilation.assets[`back/${data.split('.html').shift()}${date}.html`] = {
                    source: () => result,
                    size: () => Buffer.byteLength(result, 'utf8')
                }
            })
        })
    }
}
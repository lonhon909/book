const moment = require('moment');

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
                compilation.assets[`back/${data.split('.html').shift()}${date}.html`] = {
                    source: () => content,
                    size: () => Buffer.byteLength(content, 'utf8')
                }
            })
        })
    }
}
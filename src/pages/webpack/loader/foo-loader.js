// loader-utils 获取传递给 loader 的选项
const { getOptions } = require('loader-utils');
/**
 * 
 * @param {String|Buffer} source source 源文件的内容
 * @param {content} map 可以被 https://github.com/mozilla/source-map 使用的 SourceMap 数据
 * @param meta 数据，可以是任何内容
 */
function webpackLoader(source, map, meta) {
    // 获取传入的配置参数
    const options = getOptions(this);
    console.log(options)
    let result = source;

    const callback = this.async();
    if (result.startsWith('#!')) {
        const content = source.slice(2);
        const arr = [];
        let i = 0;
        while(i < content.length) {
            arr.push(content.slice(i, i + 8));
            i += 8;
        }
        result = arr.map((item) => String.fromCharCode(`0b${item}`)).join('');
        callback(null, `export default ${JSON.stringify(result)}`)
        return;
    }
    callback(null, `export default ${JSON.stringify(result)}`)
    // return `export default ${JSON.stringify(result)}`;
}

module.exports = webpackLoader;

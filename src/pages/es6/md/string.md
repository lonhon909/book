# 字符串实列方法

+ `includes` 返回布尔值，表示是否找到了参数字符串
+ `startsWith` 返回布尔值，表示参数字符串是否在原字符串的头部。
+ `endsWith` 返回布尔值，表示参数字符串是否在原字符串的尾部。
+ `repeat` 返回一个新字符串，表示将原字符串重复`n`次
+ `trimStart` 去掉头部空格，行为与trim()一致
+ `trimEnd` 去掉尾部空格，行为与trim()一致
+ `replaceAll` 一次性替换所有匹配

```js
'hello world'.includes('wor') // true
'hello world'.startsWith('hel') // true
'hello world'.endsWith('hel') // false
'hello world'.repeat(2) // "hello worldhello world"

// replaceAll
'aaaaaabbbbbbbccccc'.replace(/a/g, '1') // es5
'aaaaaabbbbbbbccccc'.replaceAll('a', '1') // es6
'aabbcc'.replaceAll('b', () => '_') // 第二个参数是一个函数

```
### 标签模板

标签模板其实不是模板，`而是函数调用的一种特殊形式`。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数

```js
let a = 1, b = 2, c = 3;
function sss() {
    console.log(arguments) // Arguments: ['Hsd ', ' ddsd sdd ', ' asd ', ''], 1, 2, 3
}
// 标签模板 第一个参数为模板中没有变量组成的数组
sss`Hsd ${a} ddsd sdd ${b} asd ${c}`;
// 等同于
sss(['Hsd ', ' ddsd sdd ', ' asd ', ''], a, b, c);

// 过滤 HTML 字符串，防止用户输入恶意内容
const message = `<p>你好！${value}</p>`;
function handleMessage(arrs, ...rest) {
    let s = arrs[0];
    for (let i = 1; i < rest.length; i++) {
        let arg = String(rest[i]);
        s += arg.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        s += rest[i];
    }
    return s;
}
```
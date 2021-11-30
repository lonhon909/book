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

# RegExp

## 先行断言、后行断言

| 表达式 | 断言 | 含义
|:--|:--|:--
| `x(?=exp)` | 宽宽正向先行断言 | 匹配某个位置，该位置的后面的内容应匹配表达式 exp
| `x(?!exp)` | 零宽负向先行断言 | 匹配某个位置，该位置的后面的内容应不匹配表达式 exp
| `(?<=exp)x` | 零宽正向后行断言 | 匹配某个位置，该位置的前面的内容应匹配表达式 exp （`ES2018引入`）
| `(?<!exp)x` | 零宽负向后行断言 | 匹配某个位置，该位置的前面的内容不匹配表达式 exp （`ES2018引入`）

```js
/*
    零宽：只作为匹配的判断条件，不消耗字符
*/
const str = 'zhong hua zhon min gong zhonu guo';

str.match(/zhon(?=\s)/g) // ["zhon "]

str.match(/zhon(?!\s)./g) // ["zhong", "zhonu"]

str.match(/(?<=\s)zhon./g) // ["zhon ", "zhonu"]

str.match(/(?<!\s)zhon./g) // ["zhong"]
```

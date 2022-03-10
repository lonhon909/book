#

## is

用法：`prop is Type` 一般用于函数返回值类型，判断参数是否属性某一类型，并根据结果返回对应的布尔类型

```js
// is 类型保护
function isNumber(val: unknown): val is number {
    return typeof val === 'number';
}
// 直接返回 boolean
function isArray(val: unknown): boolean {
    return Array.isArray(val);
}
```
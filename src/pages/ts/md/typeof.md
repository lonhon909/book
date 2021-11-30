# `typeof` 获取一个变量或对象的类型

```js
const target = {
    name: '张xx',
    age: 18
}
// 从一个变量中获取类型
type Options = typeof target;

const params: Options = {
    name: '',
    age: 19
}
```

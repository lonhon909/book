# `keyof` 操作符

获取某种类型的所有键名 `key`，返回其联合类型

```js
interface Person {
    name: string
    age: number
    weight: number
}
// 返回的是键名联合类型，不是键值
type Man = keyof Person; // 'name'|'age'|'weight'
let a: Man = 'name'; // √
a = 'age'; // √
a = 'weight'; // √

function fn<T extends keyof Person>(a: T) { return a }
fn('name'); // √
fn('age'); // √
fn('weight'); // √
fn(1); // Argument of type '1' is not assignable to parameter of type 'keyof Person'.
```

```js
// 约束U的类型是 T键名的子类型
function getValue<T, U extends keyof T>(target: T, key: U) {
    return target[key];
}
```

`keyof` 与 `typeof` 结合使用

```js
// typeof 获取一个变量或对象的类型
const a = {
    name: '张小小',
    age: 18
}
// 
type PP = keyof typeof a;

let p: PP = 'name';
p = 'age';
```

# `Reflect`

`Reflect` ES6 为了操作对象而提供的新 API

```js
const data = {
    name: '张涵',
    age: 18
}
```

+ 1、`Reflect.has` (target, prop)
    ```js
    // es5写法 命令式
    if ('name' in data) {}
    // es6写法 函数式
    if (Reflect.has(data, 'name')) {}
    ```
+ 2、`Reflect.get` (target, prop)
+ 3、`Reflect.set` (target, prop, value)
+ 4、`Reflect.deleteProperty` (target, prop)
    ```js
    // es5
    delete data.name
    // es6
    Reflect.deleteProperty(data, 'name'); // 返回一个boolean值，表示删除成功或者失败
    ```
+ 5、`Reflect.getPrototypeOf` (data)， 用于读取对象的 `__proto__` 属性
    ```js
    // es5
    const proto = Object.getPrototypeOf(data);
    // es6
    const proto = Reflect.getPrototypeOf(data);
    ```
    如果参数不是对象，`Object.getPrototypeOf` 会将这个参数转为对象，然后再运行，而 `Reflect.getPrototypeOf` 会报错。

+ 6、`Reflect.setPrototypeOf` (target, data)，设置目标对象的原型（prototype）
    ```js
    // es5
    Object.setPrototypeOf(data, {}); // 返回源对象
    // es6
    Reflect.setPrototypeOf(data, {}); // 返回boolean，表示设置成功或失败
    ```
+ 7、`Reflect.defineProperty` (target, prop, descriptor)
    ```js
    // es5
    Object.defineProperty(data, 'time', {
        value: 1,
        ...
    })
    // es6
    Reflect.defineProperty(data, 'time', { // 返回一个boolean值
        value: 1,
        ...
    })
    ```
+ 8、`Refelct.getOwnPropertyDescriptor` (target, prop)
    ```js
    // es5
    Object.getOwnPropertyDescriptor(data, 'time');
    // es6
    Refelct.getOwnPropertyDescriptor(data, 'time');
    ```
+ 9、`Reflect.isExtensible` (target)，返回一个布尔值，表示当前对象是否可扩展
+ 10、`Refect.preventExtensions` (target)，让一个对象变为不可扩展，返回`boolean`表示操作是否成功

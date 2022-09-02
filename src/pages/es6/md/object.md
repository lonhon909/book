# 

+ `Object.is()` 判断两个值是否同值相等
    ```js
    // es5 相等运算符（==和===）缺点
    NaN === NaN // false es5中NaN不等于自身
    +0 === -0 // true
    // es6
    Object.is(NaN, NaN) // true
    Object.is(+0, -0) // false
    ```
+ `Object.assign(target, source1, source2, ...)` 将源对象（`source`）的所有可枚举属性，复制到目标对象（`target`）
+ `Object.getPrototypeOf()` 读取一个对象的原型对象
+ `Object.setPrototypeOf()` 设置一个对象的原型对象
    ```js
    // es5
    obj.__proto__ = xxx
    // es6
    Object.setPrototypeOf(obj, xxx) // 设置原型对象
    ```
+ Object.fromEntries() 将一个键值对数组转为对象，是Object.entries()的逆操作
    ```js
    Object.fromEntries([
        ['age', 18],
        ['name', '张珊']
    ]) // {age: 18, name: '张珊'}
    // 特别适合 Map 结构
    const map = new Map();
    map.set('key', 'value');
    Object.fromEntries(map) // { key: 'value' }
    ```
+ `Object.hasOwn()` 判断某个属性是否为原生属性(es2022新增)，类似 hasOwnProperty 方法
    ```js
    const data = { key: 'value' };
    Object.hasOwn(data, 'key') // true
    ```
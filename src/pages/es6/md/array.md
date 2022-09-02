# 数组的扩展

+ `Array.from()` 将`类数组对象`或部署了`Iterator`接口的数据结构转换成数组
    ```js
    // array-like object
    Array.from({ '0': 'a', length: 1 })
    // NodeList
    Array.from(document.querySelectorAll('a'))
    // Iterator 接口数据结构
    Array.from(new Set(arr))
    Array.from('字符串')
    // arguments
    Array.from(arguments)
    ```
+ `Array.of()` 将一组值转换为数组
    ```js
    Array.of(1, 2, 3) // [1, 2, 3]
    ```
+ `Array.prototype.find(fn)` 返回第一个符合条件的数组成员，没有符合条件的则返回`undefined`
+ `Array.prototype.findIndex(fn)` 返回第一个符合条件的数组下标，没有符合则返回`-1`
+ `Array.prototype.findLast(fn)` 从数组的最后一个成员开始，依次向前检查
+ `Array.prototype.findLastIndex(fn)` 从数组的最后一个成员开始，依次向前检查
    ```js
    [1, 2, 3, 4].find((item) => item % 2 === 0) // 2
    [1, 2, 3, 4].findLast((item) => item % 2 === 0) // 4
    ```
+ `Array.prototype.fill()` 填充
+ `Array.prototype.includes(target, start)` 表示数组是否包含给定的值
    ```js
    [1, 2, 3, 4].includes(3) // true
    // 第二个参数表示从某个位置开始查找，负数表示倒数第几个开始查找
    [1, 2, 3, 4].includes(3, 3) // false
    
    // indexOf 无法查找 NaN，因为内部使用严格相等(===)
    [NaN].indexOf(NaN) // -1
    [NaN].includes(NaN) // true
    ```
+ `Array.prototype.flat()` 拍平数组，不改变原数组
    ```js
    [1, [2, 3]].flat() // [1, 2, 3]
    // 拍平多层
    [1, [2, [3, [4]]]].flat(3) // [1, 2, 3, 4]
    // 无论多少层都能转换成一维数组
    [1, [2, [3]]].flat(Infinity)
    ```
+ `Array.prototype.flatMap(fn)` 对数组每一项执行`fn`再对返回组成的数组`flat`，相当于先对数组执行`map`再`flat`
    ```js
    [1, 2, 3].flatMap((item) => ([item * 2])) // [2, 4, 6]
    ```
+ `Array.prototype.at(number)` 返回索引对应的数组成员，支持负值（即倒数第几个成员）
    ```js
    // es5 获取最后一个元素
    arr[arr.length - 1]
    // es2022 新增
    ['a', 'b', 'c', 'd'].at(-1) // d
    ```
# 运算符

+ `**` 指数运算符，相当于 `Math.pow()`
    ```js
    Math.pow(x, y) === x ** y // true
    ```
+ `?.` 可选链操作符 允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效
    ```js
    // es5
    const val = res && res.data && res.data[0] && res.data[0].value
    // es6
    const val = res?.data?.[0]?.value
    const val = target.func?.()
    ```
+ `??` 空值合并运算符 当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧操作数，否则返回左侧操作数
    ```js
    // 逻辑运算符
    false || 1 // 1
    '' || 1 // 1
    0 || 1 // 1
    // 左侧为 null 或 undefined 才返回右侧
    false ?? 1 // false
    0 ?? 1 // 0
    '' ?? 1 // ''
    ```
# 申明文件

+ [1、定义全局变量的类型](#var).
  + `declare var`
  + `declare let`
  + `declare const`
+ [2、定义一个全局函数、类类型](#function).
  + `declare function`
  + `declare class`
+ [3、定义一个全局对象变量的类型](#namespace).
  + `declare namespace`
+ [4、在模块内部添加声明到全局作用域中](#global).
  + `declare global`

## <a name="var">1、定义全局变量的类型 **`declare var`**</a>

比如在 `html` 模板中通过 `script` 引入的全局变量

```js
declare var __isMobile__: boolean
declare let __isMobile__: boolean
// 当使用 const 定义时，表示此时的全局变量是一个常量，不允许再去修改它的值
declare const jQuery: (selector: string) => any
```

## <a name="function">2、定义一个全局函数、类类型 **`declare function`**</a>

比如在 `html` 模板中通过 `script` 引入的全局函数或者类

```js
// 定义全局函数的类型
declare function $(selector: string): any

declare class Person {
    name: string
    age: number
    constructor(name: string, age: number);
    init(): void
}
```

## <a name="namespace">3、定义一个全局对象变量的类型 **`declare namespace`**</a>

`namespace` 是 `ts` 早期时为了解决模块化而创造的关键字，中文称为命名空间。

由于历史遗留原因，在早期还没有 `ES6` 的时候，`ts` 提供了一种模块化方案，使用 `module` 关键字表示内部模块。但由于后来 `ES6` 也使用了 `module` 关键字，`ts` 为了兼容 `ES6`，使用 `namespace` 替代了自己的 `module`，更名为命名空间。

随着 `ES6` 的广泛应用，现在已经不建议再使用 `ts` 中的 `namespace`，而推荐使用 `ES6` 的模块化方案了，故我们不再需要学习 `namespace` 的使用了。

`namespace` 被淘汰了，但是在声明文件中，`declare namespace` 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。

```js
declare namespace Target {
    let name: string
    // 嵌套的命名空间
    namespace value {
        let age: number
    }
}
```

## <a name="global">4、在模块内部添加声明到全局作用域中 **`declare global`**</a>

```js
// xxx.ts 在模块内部申明作用到全局作用域
declare global {
    interface Ps {
        drag(name: string): string
    }
}
// 相当于在 xxx.d.ts
interface Ps {
    drag(name: string): string
}
```

## 5、扩展模块 `declare module`

当我们写了一个 `JS` 模块，在 `TS` 中是不能直接使用的，我们必须为此模块编写声明文件，也就是编写 `xxx.d.ts` 文件

```js
declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export var sep: string;
}
// 这种不包含内部实现细节的，TS 会把它处理成 any 类型
declare module 'hot-new-module';
```

### 通配符模块声明

```js
// 批量声明模块——通配符

// 表示 .vue文件导出的Vue类型
declare module '*.vue' {
    import Vue from "vue";
    export default Vue;
}
// 表示.html文件导出content，content的类型为string
declare module "*.html" {
    const content: string;
    export default content;
}
declare module '*.txt' {
    const content: string
    export default content
}
```

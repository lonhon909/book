# `unknown` 类型与 `any` 类型

推荐使用 `unknown` 而不是 `any`，因为它提供了更安全的类型--如果想对 `unknown` 进行操作，必须使用类型断言或缩小到一个特定的类型。

- 可以将任意类型分配给 `unknown` 变量，但必须经过类型检查或断言才能进行操作
- 可以将任意类型分配给 `any` 变量，可以进行任意操作

```ts
let prop: unknown;
prop = 1;
prop = '';
prop = false;

// prop.length = 2; // Object is of type 'unknown'.

// 必须经过类型检查或断言才能进行操作
let b: number = <number>prop;
if (Array.isArray(prop)) {
    prop.length = 1;
}


let prop1: any;
prop1 = 1;
prop1 = '';
prop1 = false;
// 进行任意操作
prop1.length = 1;
prop1();
```

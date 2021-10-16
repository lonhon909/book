# function 函数

## 函数类型

```ts
// 为函数定义类型
function fn(x: number, y: number): number {
    return x + y;
}
// 书写完整函数类型
const fn: (age: number, weight: number) => number = (x: number, y: number): number => x + y;
```

## 重载

```ts
function pickCard(x: number): number;
function pickCard(x: string): string;
function pickCard(x: any): any {
    return x;
}
```

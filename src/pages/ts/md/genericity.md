# genericity 泛型

类型变量：一种特殊的变量，只用于表示类型而不是值

```ts
function person<T>(name: T): T {
    return name;
}
// 把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性
function loggingIdentity<T>(arg: []T): T[] {
    return arg;
}
```

## 泛型接口

```ts
// 完整函数类型
const fn: <T>(name: T) => T = (prop) => prop;
// 这引导我们去写第一个泛型接口
interface Gen {
    <T>(name: T): T
}
const ex: Gen = fn;
```

### 把描述函数的泛型变量当做接口的一个参数

```ts
interface Gen<T> {
    (name: T): T
    // 这样接口里的其它成员也能知道这个参数的类型了
    age?: T
}
// 使用该接口的时候，还得传入一个类型参数来指定泛型类型（这里是：number）锁定了之后代码里使用的类型
const ex: Gen<number> = fn;
```

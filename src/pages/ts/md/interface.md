# interface接口

```ts
interface Person {
    // 1、可选属性 对可能存在的属性进行预定义
    age?: number
    // 2、只读属性
    readonly name: string
}
```

只读数组

![avatar](http://123.207.22.183/static/ReadonlyArray.png)

## 1、函数类型

接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

```ts
interface Person {
    (age: number): void
}
const p: Person = function (age) {}
```

## 2、可索引的类型

TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型

```ts
interface Person {
    // 数字索引的返回值必须是字符串索引返回值类型的子类型
    [index: number]: number
    [prop: string]: any
}

interface Person {
    name: string
    // 可以将索引签名设置为只读
    readonly [index: number]: number
}
```

![avatar](http://123.207.22.183/static/index.png)

## 3、类类型

明确的强制一个类去符合某种契约

```ts
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime!: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
}
```

## 4、接口继承

```ts
interface Person {
    age: number
}

interface Info {
    height: number
}
// 可以继承多个接口
interface Man extends Person, Info {
    sex: string
}
```

## 5、混合类型

```ts
// 一个对象可以同时做为函数和对象使用，并带有额外的属性，定义第三方库可能用到
interface Person {
    (age: number): number
    name: string
    say(): void
}

function fn(age: number) {
    return age
}
fn.name = 'fn';
fn.say = () => {}

const f: Person = fn;
```

## 6、接口继承类

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样

接口同样会继承到类的private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）

```ts
class Person {
    age!: number
}

interface PersonMan extends Person {
    sex: string
}

const obj: PersonMan = {
    age: 18,
    sex: ''
}
```

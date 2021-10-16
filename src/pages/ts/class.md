# class类

```ts
class Person {
    // 1、默认公有的 public
    name!: string
    public wisdom!: string
    // 2、私有的 private
    private age!: number
    //3、 受保护的 protected
    protected weight!: number
    // 4、readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
    readonly height = 180
}
```

## 抽象类

```ts
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化
abstract class Animal {
    // abstract关键字定义抽象方法
    abstract name(): void
    // 不同于接口，抽象类可以包含成员的实现细节
    say() {
        console.log('不同于接口，抽象类可以包含成员的实现细节')
    }
}

// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
class Dog extends Animal {
    name() {
        return 'dog';
    }
}
```

## 把类当做接口使用

```ts
class Man extends Person {
    sex = '男';
}

// 把类当做接口使用 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类
const p: Person = new Man();
```

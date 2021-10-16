# class 类

```js
const bar = Symbol();

class Person {
    // 实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层
    name = '张三';
    constructor() {
        this.age = 18;
        this[bar] = '';
    }
    // 取值函数（getter）和存值函数（setter）
    get prop() {
        return this[bar];
    }
    set prop(value) {
        this[bar] = value;
    }
    static say() {
        console.log('类的静态方法，不会被实例继承，直接通过类来调用');
    }
}
```

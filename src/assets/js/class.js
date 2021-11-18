export class Person {
    name = '小小';
    constructor(age) {
        this.age = age;
    }
    say() {
        alert(`${this.name} - ${this.age}`)
    }
}

export class Vnode {
    tag = ''
}
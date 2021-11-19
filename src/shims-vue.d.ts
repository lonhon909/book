declare module '*.vue' {
    import Vue from "vue";
    export default Vue;
}

declare module '*.md' {
    const md: any
    export default md;
}

declare module '*.txt' {
    const content: string
    export default content
}

declare module '*.json' {
    const content: any
    export default content
}

declare const jQuery: (selector: string) => any

declare const __isMobile__: boolean

declare function $(selector: string): any


declare class Person {
    name: string
    age: number
    constructor(name: string, age: number);
    init(): void
}

interface Person {
    name: string
}

declare namespace Target {
    let name: string
    namespace value {
        let age: number
    }
    function init(): string
    class Person {
        constructor(name: string)
    }
}


interface Observable {
    name: string
}

interface Ps {
    drag<T>(name: T): Array<T>
}
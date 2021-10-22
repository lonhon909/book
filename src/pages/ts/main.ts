interface Person {
    age?: number
}

let prop: unknown;
prop = 1;
prop = '';
prop = false;

let b: number = <number>prop;

if (Array.isArray(prop)) {
    prop.length = 1;
}
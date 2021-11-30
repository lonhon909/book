# 仅仅导出/导入声明 `import type`

1、为了能让我们导入类型，`TypeScript` 重用了 `JavaScript` 导入语法，能同时导入类型与值

```js
// a.ts
export interface OnlyOptions {
    name: string
    age?: number
}
export function fn(option: OnlyOptions): string {
    return `${option.name}：${option.age}`;
}

// b.ts
import { OnlyOptions, fn } from './a.ts';
```

2、在一些场景下，`TypeScript` 会混淆导出的究竟是一个类型还是一个值

```js
import { MyThing } from './some-module.js';

export { MyThing };
```

3、在 `TypeScript 3.8` 版本中，我们添加了一个仅仅导入/导出声明语法来作为解决方式 `import type`

```ts
// 使用 import type
import type { DefineComponent } from 'vue'
```

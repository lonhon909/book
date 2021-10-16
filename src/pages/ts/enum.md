# enum 枚举

## 数字枚举

```ts
// 数字枚举自增长行为，反向映射
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
// ts编译结果
"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
```

## 字符串枚举

```ts
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
// ts编译结果
"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
```

## 异构枚举

```ts
enum Like {
    No = 0,
    Yes = "YES",
}
// ts编译结果
"use strict";
var Like;
(function (Like) {
    Like[Like["No"] = 0] = "No";
    Like["Yes"] = "YES";
})(Like || (Like = {}));
```

## 联合枚举与枚举成员的类型

* 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义，枚举成员成为了类型
* 枚举类型本身变成了每个枚举成员的 联合

```ts
enum ShapeKind {
    Circle,
    Square,
}
const age: ShapeKind.Square = 1;
```

## `const`枚举

```ts
// 不同于常规的枚举，它们在编译阶段会被删除
const enum Enum {
    A = 1,
    B = A * 2
}
const e = [Enum.A, Enum.B];
// ts编译结果
"use strict";
const e = [1 /* A */, 2 /* B */];
```

## 外部枚举 `declare`


```ts
// 外部枚举用来描述已经存在的枚举类型的形状
declare enum Enum {
    A = 1,
    B,
    C = 2
}
```

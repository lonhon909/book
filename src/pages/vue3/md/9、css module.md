## 组件作用域 css

#### 1、深度选择器

```css
/* 样式穿透 */
.a :deep(.b) {
    color: red;
}
/* 上述css会编译成 */
.a[data-v-b4e148ca] .b {
    color: red;
}
```

#### 2、css module

一个 `<style module>` 标签会被编译为 `CSS Modules` 并且将生成的 `CSS class` 作为 `$style` 对象暴露给组件

```js
// $style 对象直接暴露给组件
// $style（默认名称）
// theme（自定义名称） 
<template>
    <div :class="$style.red">red</div>
    <div :class="theme.blue">blue</div>
    <div class="yellow">yellow</div>
</template>

// 普通的 class 不能 style module 中
<style>
.yellow {
  color: yellow;
}
</style>

// 默认 $style
<style module>
.red {
    color: red;
}
</style>

// 自定义注入名称
<style module="theme">
.blue {
    color: blue;
}
</style>
```

#### 3、`css module` 的合成器 `composes` 可以组合样式

`composes` 可以有多个组合规则，但组合规则必须在其他规则之前。

```css
<style lang="less" module="theme">
.fs16 {
    font-size: 16px;
}
.lh20 {
    line-height: 20px;
}
.lh20::after {
    /* ... */
}
.peng {
    /* 合成器，伪元素与伪类均被识别 */
    composes: fs16 lh20;
    color: blue;
}
/* 以上css 编译后为： */
.peng {
    font-size: 16px;
    line-height: 20px;
    color: blue;
    &::after {
        /* ... */
    }
}
</style>
```

#### 4、`css` 中的 `v-bind` 语法

单文件组件的 `<style>` 标签支持使用 `v-bind CSS` 函数将 `CSS` 的值链接到动态的组件状态

```js
<script setup>
import { ref } from 'vue';

{/* 响应式变量 */}
const color = ref('red');
{/* 普通对象 */}
const font = {
  size: 12
};
const background = {
  color: 'yellow'
}

const handleChange = () => {
  color.value = `#${Math.random().toString(16).slice(2, 8)}`;
  font.size = font.size + 1;
  background.color = `#${Math.random().toString(16).slice(2, 8)}`;
}
</script>

<style scoped>
.yellow {
  color: v-bind('color');
  font-size: calc(v-bind('font.size') * 1px);
  background-color: v-bind('background.color');
}
</style>
```
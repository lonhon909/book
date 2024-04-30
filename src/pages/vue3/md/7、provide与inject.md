## 依赖注入

依赖注入是 `Vue` 中一个非常强大的功能，它允许你以一种声明式的方式，将依赖注入到后代组件中。

```js
<script setup>
import { provide } from 'vue';
// provide(key, value)，接收两个参数，第一个参数为注入名（可以是字符串或一个 Symbol）,第二个参数为注入值（可以是任意类型，也可以一个响应式的 ref）
provide('foo', 'bar')
provide('bar', { name: 'bar' })
// 注入值也可以是一个响应式的 ref
const count = ref(0)
provide('count', count)
</script>

<!-- 后代组件 -->
<script setup>
import { inject } from 'vue';
const foo = inject('foo')
// 祖先组件没有提供时，使用默认值
const bar = inject('bar', 'default bar');
// 当响应式的 ref 被注入时，注入的 ref 将会自动保持对其最新值的响应式绑定
const count = inject('count');
</script>
```

全局注入

```js
const app = createApp();

app.provide('$message', message);
```

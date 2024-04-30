## 侦听器 `watch`

基于状态改变执行 `"副作用"`，侦听的数据源可以是一个 `ref`，`reactive`，`computed`，或者一个`getter`函数或一个`数据源组成的数组`，当侦听的数据源改变时，会执行回调函数。

1、侦听源是 `ref`

```js
const count = ref(0);
watch(count, (newValue, oldValue) => {})
```

2、侦听源是 `reactive`

```js
const state = reactive({ count: 0 });
watch(state, (newValue, oldValue) => {})
// 不可直接侦听属性值，但可以通过一个 getter 函数来侦听
watch(state.count, (newValue, oldValue) => {}) // 错误
watch(() => state.count, (newValue, oldValue) => {}) // 正确
```

3、侦听源是一个getter函数

```js
const state = reactive({ count: 0 });
watch(() => state.count, (newValue, oldValue) => {})
```

4、侦听多个源组成的数组

```js
const count = ref(0);
const state = reactive({ count: 0, name: 'vue' });

watch([() => state.count, count], (newValue, oldValue) => {})
```

5、深层监听，传入一个响应式对象，监听对象内部属性的变化

```js
const state = reactive({ count: 0, person: { age: 18 }});
// 传入响应式对象，当state.person.age变化时，会触发侦听
watch(state, (newValue, oldValue) => {})
```

6、即时回调的侦听器 `{ immediate: true }`，创建侦听时立即调用一次
```js
watch(state, (newValue, oldValue) => {
    // 执行副作用
}, { immediate: true })
````

7、一次性侦听器 `{ once: true }`，仅在数据第一次变化时执行，后续不再触发

```js
watch(state, (newValue, oldValue) => {
    // 执行副作用
}, { once: true })
```

8、`watchEffect`，自动追踪依赖项，并在其依赖项改变时执行副作用，并且回调会立即执行

```js
// 此处自动追踪依赖项 todoId
watchEffect(() => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
})
```

9、`watch` 与 `watchEffect` 区别
- `watch` 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西
- `watchEffect` 会追踪回调中访问到的所有东西

10、回调的触发时机

回调会在组件更新之后，真实 `DOM` 更新之前触发。因此回调中访问到的 DOM 是更新之前的，如果想在回调中访问到更新之后的 DOM，可以使用 `{ flush: 'post' }`，也可以使用 `watchPostEffect`

```js
watch(() => state.person.age, (newValue, oldValue) => {
    // 访问更新之后的 DOM
    console.log(document.querySelector('.find').innerText === `${newValue}`) // true
}, { flush: 'post' })
// 使用 watchEffect
watchEffect(() => {}, { flush: 'post' })
```

11、`watchPostEffect` 回调执行时机在 DOM 更新之后
```js
watchPostEffect(() => {
    dynamicSlotName.value = state.person.age;
    // 获取到 DOM 更新之后的值
    console.log(document.querySelector('.find').innerText)
})
```

12、停止侦听器
```js
const unwatch = watch([], () => {});
// 当该侦听器不再需要时
unwatch();
```

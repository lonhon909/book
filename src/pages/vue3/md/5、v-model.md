## v-model

1、`v-model` 指令用于实现表单或组件数据的双向绑定

```js
// 底层机制
// setup 写法
<script setup>
const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue'])
</script>
// 选项式写法
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
</script>
```

2、`v-model` 的参数，多个 `v-model` 绑定

```html
<!-- 模板 -->
<HelloWorld
    v-model="msg"
    v-model:name="person.name"
    v-model:age="person.age">
</HelloWorld>
```

```js
// 子组件 HelloWorld
// setup 语法
<script setup>
const props = defineProps(['modelValue', 'name', 'age']);
const emits = defineEmits(['update:modelValue', 'update:name', 'update:age']);

const updateName = (value) => {
    emits('update:name', value);
}
const updateAge = (value) => {
    emits('update:age', value);
}
</script>
// 选项式写法
export default {
    props: ['modelValue', 'name', 'age'],
    emits: ['update:modelValue', 'update:name', 'update:age'],
    // ...
}
</script>
```

3、推荐使用 `defineModel` 宏，<sup>`Vue 3.4开始`</sup>

```js
<script setup>
{/* defineModel() 返回的值是一个 ref */}
const model = defineModel();
const name = defineModel('name');
const age = defineModel('age');

const updateModel = (value) => {
    /* 它可以像其他 ref 一样被访问以及修改 */
    model.value = value;
}
const updateName = (value) => {
    name.value = value;
}
const updateAge = () => {
    age.value += 1;
}
</script>
```

4、`v-model.prop` 自定义修饰符

```vue
<!-- 模板 -->
<PersonItem
    v-model.upperCase="msg"
    v-model:name.lowerCase="person.name">
</PersonItem>
```

+ `v3.4`版本后推荐写法
```js
// 自定义修饰符
const [model, modifiers1] = defineModel({
  set(value) {
    if (modifiers1.upperCase) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
});
// 带参数的 v-model 自定义修饰符
const [name, modifiers2] = defineModel('name', {
  set(value) {
    if (modifiers2.lowerCase) {
      return value.charAt(0).toLowerCase() + value.slice(1);
    }
    return value;
  }
});
```

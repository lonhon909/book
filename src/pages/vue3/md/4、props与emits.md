## Props 与 事件（emits）

### definProps 与 defineEmits

`defineProps` 与 `defineEmits` 是一个仅 `<script setup>` 中可用的编译宏命令，并不需要显式地导入，声明的  `props` 会自动暴露给模板，如果不使用 `<script setup>`，则需要通过 `props` 与 `emits` 选项来声明。

+ `<script setup>` 方式
```js
<script setup>
// 显式地通过 defineEmits() 宏来声明它要触发的事件
const emit = defineEmits(['inFocus', 'submit'])
const props = defineProps({
    msg: String,
    count: {
        type: Number,
        default: 0
        required: true
        validator(value) {}
    }
})
const handleClick = () => {
    // 触发事件
    emit('submit', props.count + 1);
}
</script>
```

+ 如果你没有使用 `<script setup>`，`prop` 可以使用 `props` 选项来声明，`事件`通过 `emits` 选项来声明

```js
<script>
export default {
    props: ['msg'],
    emits: ['inFocus', 'submit'],
    // setup() 接收 props 作为第一个参数
    setup(props, ctx) {
        const handleClick = () => {
            ctx.emit('submit', props.count + 1);
        }
        return {
            handleClick
        }
    }
}
</script>
```
# 自定义组件的 `v-model`

```html
<label for="1">
    勾选 <input type="checkbox" :checked="checked" @change="handleChange($event)" name="1" id="">
</label>
```

```js
export default {
    props: {
        checked: Boolean
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    methods: {
        handleChange(e) {
            this.$emit('change', e.target.checked)
        }
    }
}
```

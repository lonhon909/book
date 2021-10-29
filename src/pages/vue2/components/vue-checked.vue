<template>
    <label for="1">
        勾选 <input type="checkbox" :checked="checked" @change="handleChange($event)" name="1" id="">
    </label>
</template>

<script>
export default {
    name: 'VueChecked',
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
</script>

<style>

</style>
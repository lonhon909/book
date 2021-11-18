<template>
    <div>
        <SetViewMd />
        <br>
        <Button @click="add">add</Button>
        <p>{{formDate.obj && formDate.obj.age}}</p>
    </div>
</template>

<script>
import SetViewMd from '../md/$set.md';

export default {
    name: 'VueSetView',
    components: {
        SetViewMd
    },
    data() {
        return {
            list: [0],
            formDate: {},
        }
    },
    mounted() {
        this.formDate.obj = {};
    },
    methods: {
        add() {
            this.$set(this.formDate.obj, 'age', this.list[0] + 1);
        }
    }
}
</script>

<style>

</style>
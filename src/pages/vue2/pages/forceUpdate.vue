<template>
    <div>
        <Button @click="add">add</Button>
        <Button @click="force">$forceUpdate强制更新</Button>
        <p>{{formData.age}}</p>
    </div>
</template>

<script>
export default {
    name: 'VueForceUpdateView',
    data() {
        return {
            formData: {}
        }
    },
    mounted() {
        console.log('mounted', this._watcher)
    },
    methods: {
        add() {
            if (this.formData.age) {
                this.formData.age += 1;
            } else {
                this.formData.age = 1;
            }
        },
        force() {
            this.$forceUpdate();
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <AsyncComponentMd />
        <br>
        <Button @click="fetchAsyncComponent(1)">加载异步组件1</Button>
        <Button @click="fetchAsyncComponent(2)">加载异步组件2</Button>

        <component :is="target"></component>
    </div>
</template>

<script>
import AsyncComponentMd from '../md/async-component.md';

export default {
    name: 'AsyncComponentView',
    components: {
        AsyncComponentMd,
        HelloWorld: () => import('../components/HelloWorld'),
        ChildText: (resolve) => require(['../components/ChildText'], resolve)
    },
    data() {
        return {
            visible: false,
            target: ''
        }
    },
    // mounted() {
    //     setTimeout(() => {
    //         this.target = 'HelloWorld';
    //     }, 5000);
    // },
    methods: {
        fetchAsyncComponent(val) {
            if (val === 1) {
                this.target = 'HelloWorld'
            } else {
                this.target = 'ChildText'
            }
        }
    }
}
</script>

<style>

</style>
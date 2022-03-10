<template>
    <div>
        <OnDeleteOnceWatchMd />

        <OnVue />
    </div>
</template>

<script>
import OnDeleteOnceWatchMd from '../md/$on$delete$watch$once.md';
import OnVue from './components/on.vue';

import bus from './components/bus';

export default {
    name: 'OnDeleteOnceWatch',
    components: {
        OnDeleteOnceWatchMd,
        OnVue
    },
    data() {
        return {};
    },
    beforeMount() {
        this.$on('hook:mounted', (...rest) => {
            console.log(...rest)
        });
    },

    mounted() {
        console.log(1)

        bus.$on(['change'], (...rest) => {
            console.log(...rest)
        });
    },

    methods: {
        onMounted() {
            // 子组件的生命周期函数先执行，之后才轮到父组件
            setTimeout(() => {
                this.$emit('change', '哈哈')
            }, 1000)
        }
    }
}
</script>

<style>

</style>
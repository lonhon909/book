<template>
    <div>
        <EventsMixinMd />
        <div @click="open">click-open</div>
    </div>
</template>

<script>
import EventsMixinMd from '../md/eventsMixin.md';
import bus from './bus';

export default {
    name: 'EventsMixin',
    components: {
        EventsMixinMd
    },
    mounted() {
        bus.$on('open', (...args) => {
            console.log(args)
        });
        this.$once('hook:beforeDestroy', () => {
            console.log('hook:beforeDestroy');
            bus.$off('open');
        });
    },
    methods: {
        open() {
            bus.$emit('open', '哈哈', 1000)
        }
    }
}
</script>

<style>

</style>
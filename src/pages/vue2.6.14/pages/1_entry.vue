<template>
    <div>
        <Vue2ParseEntryMd />
    </div>
</template>

<script>
import Vue from 'vue/dist/vue.runtime.esm';
import Vue2ParseEntryMd from '../md/1_entry.md';
import Test from './Test.vue';

const vm = new Vue({
    data: { haha: 'jk' }
});

const h = vm.$createElement;

function fn() {
    return h('div', {
        key: {}
    }, [function() {return '函数';}]);
}

console.log(fn());

export default {
    name: 'Vue2ParseEntry',
    components: {
        Vue2ParseEntryMd
    },
    mounted() {
        
    }
}
</script>

<style>

</style>
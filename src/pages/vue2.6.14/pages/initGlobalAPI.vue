<template>
    <div>
        <initGlobalAPIMd />
    </div>
</template>

<script>
import Vue from 'vue';
import initGlobalAPIMd from '../md/initGlobalAPI.md';

const obj = {};

const Vue2 = Vue.extend(obj);
const Vue3 = Vue2.extend(obj);
Vue2.mixin({
    data() {
        return {
            a: 2
        }
    }
})
Vue3.mixin({
    data() {
        return {
            a: 3
        }
    }
})

export default {
    name: 'initGlobalAPI',
    components: {
        initGlobalAPIMd
    },
    data() {
        return {
            sum: 1,
            form: {
                value: '001'
            }
        }
    },
    mounted() {
        /* const asd2 = new Vue2({ template: '<p>pp-{{a}}</p>' }).$mount();
        this.$el.appendChild(asd2.$el);


        const asd = new Vue3({ template: '<p>pp-{{a}}</p>' }).$mount();
        this.$el.appendChild(asd.$el);
        console.log(obj) */
    }
}
</script>

<style>

</style>
<template>
    <div>
        <VueExtendMd />
        <HelloWorld />
        <ChildrenExtend name="张珊" />
    </div>
</template>

<script>
import Vue from 'vue';
import VueExtendMd from '../md/Vue.extend.md';

const HelloWorld = Vue.extend({
    props: {
        name: String
    },
    data() {
        return {
            age: 18
        }
    },
    render() {
        return (
            <div>{this.name}-{this.age}</div>
        )
    }
});

const ChildrenExtend = Vue.extend({
    mixins: [HelloWorld],
    props: {},
    data() {
        return {}
    },
    methods: {},
})

export default {
    name: 'VueExtendComponent',
    components: {
        ChildrenExtend,
        HelloWorld,
        VueExtendMd
    },
    data() {
        return {
            
        }
    },
    mounted() {
        this.$el.appendChild(new HelloWorld({
            propsData: {
                name: '小心新'
            }
        }).$mount().$el)
    }
}
</script>

<style>

</style>
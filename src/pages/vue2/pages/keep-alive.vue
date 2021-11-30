<template>
    <div>
        <KeepAliveMd />
        <br>
        <Button @click="activeComponent='HelloWorld'">组件HelloWorld</Button>
        <Button @click="activeComponent='ChildrenText'">组件ChildrenText</Button>
        <keep-alive include="HelloWorld">
            <component :is='activeComponent'></component>
            <HelloWorld>
                <ChildrenText/>
                <ChildrenText/>
            </HelloWorld>
        </keep-alive>
        <br>
        <Button @click="jump('AsyncComponentView')">进入异步组件将被缓存，试试？</Button>
    </div>
</template>

<script>
import KeepAliveMd from '../md/keep-alive.md';

export default {
    name: 'VueKeepAlive',
    components: {
        KeepAliveMd,
        HelloWorld: {
            data() {
                return {
                    num: 1
                }
            },
            render() {
                return (
                    <div>
                        <p>{this.num}</p>
                        <Button onClick={this.add}>add</Button>
                    </div>
                )
            },
            mounted() {
                console.log(this.$slots.default)
            },
            methods: {
                add() {
                    this.num += 1
                }
            }
        },
        ChildrenText: { template: '<div>组件ChildrenText</div>' }
    },
    data() {
        return {
            activeComponent: 'HelloWorld'
        }
    },
    methods: {
        jump(name) {
            this.$router.push({
                name
            })
        }
    },
    beforeRouteLeave (to, from, next) {
        console.log(to.name)
        if (to.name === 'AsyncComponentView') {
            const cache = this.$store.state.cachesIncludes;
            if (!cache.includes(from.name)) {
                cache.push(from.name);
                this.$store.commit('setCache', cache.slice());
            }
        } else {
            const cache = this.$store.state.cachesIncludes;
            const index = cache.indexOf(from.name);
            if (index !== -1) {
                cache.splice(index, 1);
                this.$store.commit('setCache', cache.slice());
            }
        }
        setTimeout(() => {
            next();
        })
    },
}
</script>

<style>

</style>
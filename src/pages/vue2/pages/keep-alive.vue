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
}
</script>

<style>

</style>
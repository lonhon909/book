<template>
    <div>
        <Button @click="add">同步提交mutation</Button>
        <Button @click="handleChange">异步提交actions</Button>
        <p>{{name}}</p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'VuexDemo',
    data() {
        return {
            
        }
    },
    computed: {
        name() {
            return this.$store.state.appName
        },
        ...mapState(['demoName', 'appName', 'age']),
        ...mapState({
            'demo': (state) => state.demoName,
            logo: 'logo',
        })
    },
    methods: {
        ...mapMutations(['addAge']),
        ...mapActions(['changeAsyncArr']),
        add() {
            this.$store.commit('addAge', this.age + 1)
            // 也可以使用辅助函数
            /* this.addAge(this.age + 1) */
        },
        handleChange() {
            this.changeAsyncArr().then((res) => {
                console.log(res)
            })
        }
    }
}
</script>

<style>

</style>
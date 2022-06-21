<template>
    <div class="view-container">
        <keep-alive :include="caches" :max="3">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'PureComponent',
    computed: {
        ...mapState({
            caches: 'cachesIncludes'
        }),
    },
    methods: {
        ...mapMutations(['setCache']),
    },
    watch: {
        '$route': {
            immediate: true,
            handler(to, from) {
                console.log(to, from)
                if (to.meta && to.meta.keepAlive) {
                    this.setCache([...this.caches, to.name]);
                }
            }
        }
    }
}
</script>

<style>
.view-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>
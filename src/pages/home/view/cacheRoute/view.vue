<template>
    <div class="cache-route">
        <ul class="cache-left">
            <li
                v-for="item in list"
                :key="item.name"
                @click="jumpRoute(item)">{{item.label}}</li>
        </ul>
        <div class="cache-right" v-if="$route.path.indexOf('/buy')!==-1">
            <keep-alive :include="include">
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="cache-right" v-else>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CacheRoute',
    data() {
        return {
            list: [
                { name: 'CacheRouteBuy', label: 'buy' },
                { name: 'ShopFood', label: 'shop' },
            ],
            // 要实现缓存必须将组件名称 push 到 include 中
            include: []
        };
    },
    mounted() {
        console.log(1)
        if (this.$route.meta && this.$route.meta.keepAlive) {
            this.include.push(this.$route.name);
        }
    },
    methods: {
        jumpRoute(data) {
            this.$router.push({
                name: data.name
            })
        }
    },
    beforeRouteUpdate(to, from, next) {
        console.log(2)
        if (to.meta && to.meta.keepAlive && !this.include.includes(to.name)) {
            this.include.push(to.name);
        }
        next();
    }
}
</script>

<style lang="less" scoped>
.cache-route {
    display: flex;
    .cache-left {
        width: 200px;
        padding-right: 10px;
        border-right: 1px solid #eee;
        font-size: 12px;
        line-height: 40px;
        li {
            padding: 0 10px;
            cursor: pointer;
            border-bottom: 1px solid #eee;
            &:hover {
                background-color: #ccc;
            }
        }
    }
}
</style>
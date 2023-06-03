<template>
    <div class="scroll-wrapper" ref="wrapper">
        <ul class="scroll-content" ref="content">
            <li v-for="item in num" :key="item"></li>
        </ul>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    name: 'BsView',

    data() {
        return {
            num: 5
        };
    },

    mounted() {
        if (!this.bs) {
            this.bs = new BScroll(this.$refs.wrapper)
        }
    }
};
</script>

<style lang="less" scoped>
.scroll-wrapper {
    height: calc(100vh - 64px);
    overflow: hidden;
}
.scroll-content {
    min-height: calc(100% + 1px);
}
.scroll-content li {
    height: 50px;
    &:nth-child(2n) {
        background-color: antiquewhite;
    }
}
</style>
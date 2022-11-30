<template>
    <div class="home"></div>
</template>

<script>
import { mapState } from 'vuex'
import lottie from 'lottie-web';

export default {
    computed: {
        ...mapState(['name'])
    },

    mounted() {
        console.log(jQuery('#app'))

        this.$nextTick(() => {
            lottie.loadAnimation({
                container: document.querySelector('.home'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: require('./bg.json')
            })
        })
    }
}
</script>

<style lang="less" scoped>
.home {
    width: 500px;
    height: 500px;
    font-size: 18px;
    color: antiquewhite;
    font-weight: bold;
}
</style>
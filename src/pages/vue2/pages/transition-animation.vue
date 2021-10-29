<template>
    <div class="transition-animation">
        <TransitionAnimationMd/><br>

        <div class="transition-animation-case">
            <section class="transition-item">
                <Button type="primary" class="mb10" @click="visible1=!visible1">{{visible1?'hide':'show'}}</Button>
                <transition name="fade">
                    <div class="wh80" v-if="visible1">v-if</div>
                </transition>
            </section>

            <section class="transition-item">
                <Button type="primary" class="mb10" @click="visible2=!visible2">{{visible2?'hide':'show'}}</Button>
                <transition name="fade">
                    <div class="wh80" v-show="visible2">v-show</div>
                </transition>
            </section>

            <section class="transition-item">
                <Button type="primary" class="mb10" @click="visible3=!visible3">{{visible3?'hide':'show'}}</Button>
                <transition
                    enter-class="enter-view"
                    enter-active-class="enter-active-view"
                    enter-to-class="enter-to-view"
                    leave-class="leave-to"
                    leave-active-class="leave-active-view"
                    leave-to-class="leave-to-view">
                    <div class="wh80" v-show="visible3">自定义类名</div>
                </transition>
            </section>
        </div>
    </div>
</template>

<script>
import TransitionAnimationMd from '../md/transition-animation.md';

export default {
    name: 'TransitionAnimation',
    components: {
        TransitionAnimationMd
    },
    data() {
        return {
            visible1: true,
            visible2: true,
            visible3: true,

        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.transition-animation {
    padding: 10px;
    .transition-animation-case {
        display: flex;
    }
    .transition-item {
        width: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
}
.fade-enter,
.fade-leave-to {
    width: 0;
    height: 0;
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}

.enter-view,
.leave-to-view {
    opacity: 0;
    background-color: red;
}
.enter-active-view,
.leave-active-view {
    transition: all .5s;
}
</style>
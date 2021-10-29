<template>
    <transition name="fade">
        <div class="loading-mask" v-if="loading">
            <div class="loading-spinner">
                <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'IviewLoading',
    props: {
        loading: Boolean
    },
    watch: {
        loading(value) {
            if (!value) {
                setTimeout(() => {
                    this.$destroy();
                    this.$el.remove();
                }, 500);
            }
        }
    }
}
</script>

<style lang="less" scoped>
.loading-mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    .loading-spinner {
        position: absolute;
        top: calc(~'50% - 9px');
        left: 0;
        width: 100%;
        text-align: center;
        .circular {
            height: 32px;
            width: 32px;
            animation: loading-rotate 2s linear infinite;
            .path {
                animation: loading-dash 1.5s ease-in-out infinite;
                stroke-dasharray: 90,150;
                stroke-dashoffset: 0;
                stroke-width: 2;
                stroke: #F76A2B;
                stroke-linecap: round;
            }
        }
    }
}

@keyframes loading-rotate {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes loading-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset:-40px;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
</style>
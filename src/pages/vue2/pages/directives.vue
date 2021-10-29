<template>
    <div v-loading="loading" class="iview-directives">
        <Button type="primary" @click="isDrag=!isDrag">{{isDrag ? '禁止拖拽' : '允许拖拽'}}</Button>
        <Button type="primary" @click="loading=true">自定义 v-loading</Button>
        <div v-drag="isDrag" class="drag-ele"></div>
    </div>
</template>

<script>
import drag from '@/common/directives/drag';

export default {
    name: 'VueDirectives',
    directives: {
        drag
    },
    data() {
        return {
            isDrag: true,
            loading: true
        }
    },
    mounted() {

    },
    watch: {
        loading: {
            immediate: true,
            handler(value) {
                if (value) {
                    setTimeout(() => {
                        this.loading = false;
                    }, 2000)
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.iview-directives {
    width: 100%;
    height: 100%;
}
.drag-ele {
    position: fixed;
    top: 300px;
    left: 300px;
    width: 50px;
    height: 50px;
    z-index: 101;
    border-radius: 50%;
    background: radial-gradient(#f7d4cc, #0c0cef);
    box-shadow: 0 0 6px 6px #dee0e3;
    cursor: move;
}
</style>
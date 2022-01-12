<template>
    <div class="layers-view">
        <div class="layer-fixed"></div>
    </div>
</template>

<script>
export default {
    name: 'CssLayers',
}
</script>

<style lang="less" scoped>
.layers-view {
    position: relative;
}
.layer-fixed {
    // position: fixed;
    top: 120px;
    left: 20px;
    width: 100px;
    height: 100px;
    background-color: antiquewhite;
    // opacity: 0.2;
    // will-change: transform;
    // transform: translateZ(0);
    backface-visibility: hidden
}
</style>
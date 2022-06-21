<template>
    <div>
        <CanvasShadowMd></CanvasShadowMd>

        <canvas id="canvas" class="canvas" width="600" height="300"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasShadowMd from '../md/shadow.md';

@Component({
    name: 'CanvasShadow',
    components: {
        CanvasShadowMd
    }
})
export default class CanvasShadow extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        // 阴影颜色
        ctx.shadowColor = 'red';
        // 阴影的模糊级别
        ctx.shadowBlur = 10;
        // 阴影x方向的偏移量
        ctx.shadowOffsetX = 20;
        // 阴影y方向的偏移量
        ctx.shadowOffsetY = 50;
        // 填充
        ctx.fillRect(10, 10, 100, 100);
        // 描边
        ctx.strokeRect(150, 10, 100, 100);
        // 文字
        ctx.font="30px Verdana";
        ctx.strokeText('Hello world!', 300, 50);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>
<template>
    <div>
        <CanvasFillStyleMd></CanvasFillStyleMd>

        <canvas id="canvas" class="canvas" width="500"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasFillStyleMd from '../md/fillStyle.md';

@Component({
    name: 'CanvasFillStyle',
    components: {
        CanvasFillStyleMd
    }
})
export default class CanvasFillStyle extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 100, 100);

        // 创建线性的渐变对象
        const gradient = ctx.createLinearGradient(100, 0, 100, 150);
        // 规定渐变对象中的颜色和位置 addColorStop(stop, color),stop介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.5, 'green');
        gradient.addColorStop(1, 'blue');
        ctx.fillStyle = gradient;
        ctx.fillRect(100, 0, 100, 150);

        // 创建径向渐变对象
        const grd = ctx.createRadialGradient(250, 50, 5, 250, 50, 50);
        grd.addColorStop(0,"red");
        grd.addColorStop(1,"white");
        ctx.fillStyle = grd;
        ctx.fillRect(200, 0, 100, 100);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    margin: 50px 0 0 50px;
    border: 1px solid #ccc;
}
</style>
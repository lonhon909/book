<template>
    <div>
        <CanvasStrokeStyleMd></CanvasStrokeStyleMd>

        <canvas id="canvas" class="canvas" width="500"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasStrokeStyleMd from '../md/strokeStyle.md';

@Component({
    name: 'CanvasStrokeStyle',
    components: {
        CanvasStrokeStyleMd
    }
})
export default class CanvasStrokeStyle extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
        // 纯色
        ctx.strokeStyle = 'red';
        ctx.strokeRect(10, 10, 90, 90);

        // 创建线性的渐变对象
        const gradient = ctx.createLinearGradient(110, 10, 110, 130);
        // 规定渐变对象中的颜色和位置 addColorStop(stop, color),stop介于 0.0 与 1.0 之间的值，表示渐变中开始与结束之间的位置
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.5, 'green');
        gradient.addColorStop(1, 'blue');
        ctx.strokeStyle = gradient;
        ctx.strokeRect(110, 10, 110, 130);

        ctx.font="30px Verdana";
        const grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
        grd.addColorStop(0,"magenta");
        grd.addColorStop(0.5,"blue");
        grd.addColorStop(1,"red");
        ctx.strokeStyle = grd;
        ctx.strokeText('Hello world!', 250, 50, 300);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>
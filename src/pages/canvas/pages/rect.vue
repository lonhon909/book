<template>
    <div>
        <CanvasRectMd></CanvasRectMd>

        <canvas id="canvas" class="canvas" width="600" height="300"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasRectMd from '../md/rect.md';

@Component({
    name: 'CanvasRect',
    components: {
        CanvasRectMd
    }
})
export default class CanvasRect extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        // 1、创建矩形
        ctx.rect(10, 10, 100, 100);
        // 填充
        ctx.fill();
        // 2、创建并填充，相当于 rect() + fill();
        ctx.fillRect(150, 20, 100, 100);
        // 3、创建并描边
        ctx.strokeRect(300, 30, 100, 100);
        
        // 4、清空给定矩形内的指定像素，这块区域会变的完全透明
        ctx.clearRect(40, 40, 30, 20);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>
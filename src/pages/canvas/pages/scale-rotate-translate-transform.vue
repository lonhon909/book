<template>
    <div>
        <CanvasTranslateMd></CanvasTranslateMd>

        <canvas id="canvas" class="canvas" width="600" height="300"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasTranslateMd from '../md/scale-rotate-translate-transform.md';

@Component({
    name: 'CanvasTranslate',
    components: {
        CanvasTranslateMd
    }
})
export default class CanvasTranslate extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        // 1、移动画布的原点坐标到(50, 50)
        ctx.translate(50, 50);
        ctx.fillRect(-50, -50, 50, 50); // 移动了原点，出现负值坐标了
        // 2、重置并创建新的矩阵，而 transform 是在原来的基础上变换矩阵
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.translate(50, 50);
        // 以当前Z轴为旋转轴旋转平面坐标系，顺时针，弧度表示
        ctx.rotate(45 * Math.PI / 180);
        ctx.fillRect(0, 0, 50, 50);
        // 3、重置矩阵
        ctx.resetTransform();
        ctx.fillStyle = 'red';
        ctx.translate(100, 100);
        ctx.fillRect(0, 0, 50, 50);
        ctx.translate(50, 50);
        // 4、scale(x, y) => (水平方向的缩放因子, 垂直方向的缩放因子)
        ctx.scale(2, 2);
        ctx.fillRect(10, 10, 50, 50);
        ctx.translate(10, 10);
        ctx.transform(1, 0, 0, 1, 0, 0);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>
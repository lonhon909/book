<template>
    <div>
        <CanvasPathMd></CanvasPathMd>

        <canvas id="canvas" class="canvas" width="600" height="300"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasPathMd from '../md/path.md';

@Component({
    name: 'CanvasPath',
    components: {
        CanvasPathMd
    }
})
export default class CanvasPath extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        // 1、新起一条路径或重置路径
        ctx.beginPath();
        // 2、移动画笔到指定位置，此时不会创建线条
        ctx.moveTo(10, 50);
        // 3、添加一个新点，定义一条当前画笔位置到新点的轨迹线条
        ctx.lineTo(50, 200);
        // 绘制已定义的线条路径
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(200, 100);
        ctx.lineTo(200, 200);
        // 连接轨迹的开始与结束点，让整个路径闭合起来
        ctx.closePath();
        // 填充整个路径形成的闭合区域
        ctx.fill();

        ctx.beginPath();
        // 创建圆或弧轨迹 arc(x, y, r, sAngle, eAngle, counterclockwise) => (圆心x, 圆心y, 半径, 起始角, 结束角, 顺时针true/逆时针false)
        ctx.arc(300, 150, 50, 0, 1 * Math.PI); // 以弧度为计量
        ctx.closePath();
        ctx.stroke();
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>
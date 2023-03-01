<template>
    <div>
        <CanvasFontMd></CanvasFontMd>

        <canvas id="canvas" class="canvas" width="600" height="500"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasFontMd from '../md/font.md';

@Component({
    name: 'CanvasFont',
    components: {
        CanvasFontMd
    }
})
export default class CanvasFont extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        // 语法与 CSS font 属性相同
        ctx.font = 'normal bold 30px sans-serif';
        // 设置或返回在绘制文本时的当前文本基线，文本将基线对齐（竖直方向）
        ctx.textBaseline = 'middle';
        // 描边的形式绘制文本 (text, x, y, maxWidth?) => (绘制的文本, 开始绘制文本的 x 坐标位置, 开始绘制文本的 y 坐标位置, 可选。允许的最大文本宽度)
        ctx.strokeText('Hello world!', 0, 30);

        ctx.beginPath();
        ctx.moveTo(200, 50);
        ctx.lineTo(200, 150);
        ctx.stroke();

        // 设置字体颜色
        ctx.fillStyle = 'red';
        // 基于开始绘制起点水平方向的对齐方式
        ctx.textAlign = 'center';
        // 填充的形式绘制文本
        ctx.fillText('水平左右居中', 200, 100);

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'magenta');
        gradient.addColorStop(0.5, 'blue');
        gradient.addColorStop(1, 'red');
        ctx.fillStyle = gradient;
        ctx.textAlign = 'left';
        ctx.fillText('Hello world!', 0, 150);

        /* ***** 计算字体的宽度 ***** */
        const text = '该方法返回包含一个对象，该对象包含以像素计的指定字体宽度；如果您需要在文本向画布输出之前，就了解文本的宽度，那么请使用该方法';
        ctx.font = 'normal bold 8px sans-serif';
        ctx.textAlign = 'left';
        // canvas是不能自动换行的，需要根据measureText获取指定字体宽度，自行截取成多个文本在手动绘制
        ctx.fillText(text, 0, 250);

        ctx.font = 'normal bold 30px/60px sans-serif';
        const arr = [];
        let start = 0, i = 1;
        for (; i <= text.length; i++) {
            // measureText 获取指定文本的宽度
            if (Math.ceil(ctx.measureText(text.substring(start, i)).width) > canvas.width) {
                arr.push(text.substring(start, i - 1));
                i--;
                start = i;
            }
        }
        if (start < i) {
            arr.push(text.substring(start, i - 1));
        }
        console.log(arr);
        
        arr.forEach((item, index) => {
            ctx.fillText(item, 0, 300 + index * 60);
        })
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
    letter-spacing: 1px;
}
</style>
<template>
    <div>
        <CanvasDrawImageMd></CanvasDrawImageMd>
        <img src="/static/ec10a43386df601abeda8481695cd19d.jpeg" alt="" class="image">
        <canvas id="canvas" class="canvas" width="700" height="300"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasDrawImageMd from '../md/drawImage.md';

@Component({
    name: 'CanvasDrawImage',
    components: {
        CanvasDrawImageMd
    }
})
export default class CanvasDrawImage extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        const image = <HTMLImageElement>document.querySelector('.image');
        image.onload = function() {
            // 1、drawImage(image, x, y) => (图像, 在画布上放置的x坐标, 在画布上放置的y坐标)；自动使用图像的尺寸
            ctx.drawImage(image, 0, 0);
            // 2、drawImage(image, x, y, width, height) => (图像, 放置的x坐标, 放置的y坐标, 图像的宽度, 图像的高度)
            ctx.drawImage(image, 250, 0, 200, 100); // 可拉伸或缩小
            // 3、裁剪 drawImage(image, sx, sy, swidth, sheight, x, y, width, height) => (图像, 开始裁剪x坐标，开始裁剪y坐标，裁剪宽度，裁剪高度，放置x坐标，放置y坐标，图像的宽度, 图像的高度)
            ctx.drawImage(image, 0, 0, 100, 100, 500, 0, 100, 100);
        }
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
.image {
    vertical-align: top;
}
</style>
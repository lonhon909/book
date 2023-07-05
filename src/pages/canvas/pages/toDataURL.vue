<template>
    <div>
        <CanvasToDataURLMd></CanvasToDataURLMd>

        <canvas id="canvas" class="canvas" width="200" height="100"></canvas>
        <br>
        <Button @click="toDataURL">toDataURL</Button>
        <Button @click="toBlob">toBlob</Button>
        <br>
        <br>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasToDataURLMd from '../md/toDataURL.md';

@Component({
    name: 'CanvasToDataURL',
    components: {
        CanvasToDataURLMd
    }
})
export default class CanvasToDataURL extends Vue {
    canvas!: HTMLCanvasElement
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        ctx.fillStyle = '#eeeeee';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 50, 50);

        this.canvas = canvas;
    }
    toDataURL() {
        /**
         * @param { DOMString } 指定格式，默认 image/png
         * @param { Number } 可选 0-1 之间，当图片格式为 image/jpeg 或者 image/webp 时有效
         */
        const url = this.canvas.toDataURL('image/jpeg', 0.9);
        const image = new Image();
        image.src = url;
        this.$el.appendChild(image);
    }
    toBlob() {
        /**
         * @param { Function } 回调函数
         * @param { DOMString } 可选，指定格式，默认 image/png
         * @param { Number } 可选 0-1 之间，当图片格式为 image/jpeg 或者 image/webp 时有效
         */
        this.canvas.toBlob((blob) => {
            const image = new Image();
            const url = URL.createObjectURL(<Blob>blob);
            image.onload = function() {
                URL.revokeObjectURL(url);
            }
            image.src = url;
            this.$el.appendChild(image);
        }, 'image/jpeg', 0.9);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>
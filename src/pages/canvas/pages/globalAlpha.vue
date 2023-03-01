<template>
    <div>
        <CanvasGlobalAlphaMd></CanvasGlobalAlphaMd>

        <canvas id="canvas" class="canvas" width="600" height="300"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasGlobalAlphaMd from '../md/globalAlpha.md';

@Component({
    name: 'CanvasGlobalAlpha',
    components: {
        CanvasGlobalAlphaMd
    }
})
export default class CanvasGlobalAlpha extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.strokeStyle = 'blue';
        ctx.font = '30px sans-serif';
        ctx.fillRect(0, 0, 100, 100);
        ctx.strokeText('Hello world!', 0, 150);

        ctx.globalAlpha = 0.5;
        ctx.fillRect(150, 0, 100, 100);
        ctx.strokeText('Hello world!', 150, 200);

        ctx.globalAlpha = 0.2;
        ctx.fillRect(300, 0, 100, 100);
        ctx.strokeText('Hello world!', 300, 250);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>
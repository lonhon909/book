<template>
    <div>
        <CanvasBaseMd />

        <canvas id="canvas" class="canvas" width="200" height="200"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasBaseMd from '../md/canvas.md';

@Component({
    name: 'CanvasBase',
    components: {
        CanvasBaseMd
    }
})
export default class CanvasBase extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        ctx.fillStyle = 'red';

        ctx.fillRect(0, 0, 100, 100);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    margin: 10px;
    border: 1px solid #ccc;
}
</style>
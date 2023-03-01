<template>
    <div>
        <CanvasSaveRestoreMd></CanvasSaveRestoreMd>

        <canvas id="canvas" class="canvas" width="600" height="300"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasSaveRestoreMd from '../md/save-restore.md';

@Component({
    name: 'CanvasSaveRestore',
    components: {
        CanvasSaveRestoreMd
    }
})
export default class CanvasSaveRestore extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, 50, 50);

        // 保存状态
        ctx.save();
        ctx.fillStyle = 'blue';
        ctx.fillRect(50, 50, 50, 50);

        // 保存状态
        ctx.save();
        ctx.fillStyle = 'yellow';
        ctx.fillRect(100, 100, 50, 50);
        ctx.restore();

        ctx.fillRect(150, 50, 50, 50);
        ctx.restore();
        
        ctx.fillRect(200, 0, 50, 50);
    }
}
</script>

<style lang="less" scoped>
.canvas {
    border: 1px solid #ccc;
}
</style>
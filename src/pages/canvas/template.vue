<template>
    <div>
        <CanvasFillStyleMd></CanvasFillStyleMd>

        <canvas id="canvas"></canvas>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import CanvasFillStyleMd from '../md/fillStyle.md';

@Component({
    name: 'CanvasFillStyle',
    components: {
        CanvasFillStyleMd
    }
})
export default class CanvasFillStyle extends Vue {
    mounted() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
    }
}
</script>

<style>

</style>
<template>
    <div>
        <CssGradientMd></CssGradientMd>
        <br>
        <div class="gradient-container">
            <canvas ref="canvas" class="sub-gradient" width="400" height="400"></canvas>
        </div>
    </div>
</template>

<script>
import CssGradientMd from '../md/gradient.md';

export default {
    name: 'CssGradient',
    components: {
        CssGradientMd
    },
    data() {
        return {
            deg: 60
        };
    },
    mounted() {
        this.initCanvas();
    },
    methods: {
        initCanvas() {
            const canvas = document.querySelector('.sub-gradient');
            // const canvas = document.createElement('canvas');

            const ctx = canvas.getContext('2d');

            ctx.strokeStyle = '#cccccc';
            ctx.lineWidth = 1;

            ctx.strokeRect(0, 100, 400, 200);


            // ctx.strokeStyle = 'blue';
            // ctx.moveTo(0, 100);
            // ctx.lineTo(400, 300);
            // ctx.stroke();


            ctx.strokeStyle = 'red';
            ctx.moveTo(200 + Math.tan(this.deg * Math.PI / 180) * 200, 0);
            ctx.lineTo(200 - Math.tan(this.deg * Math.PI / 180) * 200, 400);
            ctx.stroke();
        }
    }
}
</script>

<style lang="less" scoped>
.gradient-container {
    margin: 20px;
    width: 1000px;
    height: 600px;
    border: 1px solid #ccc;
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sub-gradient {
    border: 1px dashed #ccc;
}
</style>
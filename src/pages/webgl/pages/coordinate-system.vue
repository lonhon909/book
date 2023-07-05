<template>
    <canvas id="canvas" class="canvas-container" width="1000" height="800"></canvas>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { initShaders } from './initShaders';

@Component({
    name: 'CoordinateSystem',
})
export default class CoordinateSystem extends Vue {
    mounted() {
        this.init();
    }
    init() {
        const canvas = <HTMLCanvasElement>document.getElementById('canvas');

        const width = canvas.width = 1000;
        const height = canvas.height = 800;

        const gl = <WebGLRenderingContext>canvas.getContext('webgl');

        const vsSource = `
            attribute vec4 a_Position;
            attribute float a_PointSize;
            void main() {
                gl_Position = a_Position;
                gl_PointSize = a_PointSize;
            }
        `;
        const fsSource = `
            precision mediump float;
            uniform vec4 u_FragColor;
            void main() {
                gl_FragColor = u_FragColor;
            }
        `;

        // 初始化着色器
        initShaders(gl, vsSource, fsSource);
        // a_Position 实际上是指针
        const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        const a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
        const u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');

        gl.vertexAttrib3f(a_Position, 0, 0.5, 0);
        // 方法用于设置清空颜色缓冲时的颜色值
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        // gl.drawArrays(gl.POINTS, 0, 1);

        const { left, top, width: w, height: h } = canvas.getBoundingClientRect();
        const [scaleX, scaleY] = [w / width, h / height];

        const [halfWidth, halfHeight] = [width / 2 * scaleX, height / 2 * scaleY];
        const g_points: Array<any> = [];
        canvas.addEventListener('click', (evt) => {
            const [cssX, cssY] = [
                evt.clientX - left,
                evt.clientY - top,
            ];
            const [xBaseCenter, yBaseCenter] = [cssX - halfWidth, cssY - halfHeight];
            const yBaseCenterTop = -yBaseCenter;
            const [x, y] = [xBaseCenter / halfWidth, yBaseCenterTop / halfHeight];
            g_points.push({ x, y });
            gl.clear(gl.COLOR_BUFFER_BIT);
            const color = new Float32Array([
                Math.random(),
                Math.random(),
                Math.random(),
                1.0
            ])

            g_points.forEach((item) => {
                gl.vertexAttrib2f(a_Position, item.x, item.y);
                gl.vertexAttrib1f(a_PointSize, Math.ceil(Math.random() * 10));
                gl.uniform4fv(u_FragColor, color)
                gl.drawArrays(gl.POINTS, 0, 1);
            })
        })
    }
}
</script>

<style lang="less" scoped>
.canvas-container {
    margin: 10px;
    // width: 500px;
    // height: 400px;
}
</style>
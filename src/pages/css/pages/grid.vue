<template>
    <div>
        <CssGridMd />
        <br>
        <div class="grid-container">
            <div class="box">1</div>
            <div class="red">2</div>
            <div class="blue">3</div>
            <div class="box">4</div>
            <div class="red">5</div>
            <div class="blue">6</div>
            <div class="red">7</div>
            <div class="box">8</div>
            <div class="blue last">9</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CssGridMd from '../md/grid.md';

@Component({
    name: 'CssGrid',
    components: {
        CssGridMd
    }
})
export default class CssGrid extends Vue {

}
</script>

<style lang="less" scoped>
.grid-container {
    width: 500px;
    height: 500px;
    color: #fff;
    border: 1px solid #000;
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 100px 100px 100px 100px;

    // grid-row-gap: 2px;
    // grid-column-gap: 2px;

    grid-gap: 10px;

    // grid-auto-flow: row;
    // justify-items: center;
    // align-items: center;
    // place-items: end end;

    justify-content: center;
    align-content: center;
    grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
.box {
    // width: 30px;
    // height: 50px;
    background-color: #000;
}
.red {
    background-color: red;
}
.blue {
    background-color: blue;
}
.last {
    // 指定项目位置
    /* grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5; */
    // 简写
    // grid-column: 3 / 4;
    // grid-row: 4 / 5;
    // 指定项目放在某个区域
    grid-area: b;
}
</style>
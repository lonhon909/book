<template>
    <div>
        <CssGridMd />
        <br>
        <div class="grid-container">
            <div class="box">1</div>
            <div>2</div>
            <div>3</div>
            <div class="box">4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div class="box">8</div>
            <div>9</div>
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
    border: 1px solid #000;
    display: grid;
    grid-template-columns: repeat(4, 110px);
    grid-template-rows: 100px 100px 100px 100px;

    /* grid-row-gap: 2px;
    grid-column-gap: 2px;

    grid-gap: 10px; */

    /* grid-auto-flow: row; */
    justify-items: center;
    align-items: center;
    place-items: end end;

    justify-content: center;
    align-content: center;
}
.box {
    width: 30px;
    height: 50px;
    background-color: #000;
}
</style>
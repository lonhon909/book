<template>
    <div class="ver-con">
        <a href="https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/" target="_blank">CSS深入理解vertical-align和line-height的基友关系</a>
        <div class="ver-line">
            <img class="img" src="/static/2.jpeg" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
    name: 'VerticalAlignLineHeight'
})
export default class VerticalAlignLineHeight extends Vue {

}
</script>

<style lang="less">
.ver-con {
    padding: 10px;
}
.ver-line {
    background-color: red;
    line-height: 160px;
    font-size: 0;
    .img {
        vertical-align: middle;
    }
}
</style>
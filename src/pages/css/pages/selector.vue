<template>
    <div class="css-selector">
        <CssSelectorMd/>
        <div class="box">color</div>
        <input type="text" id="text" />
        <br>
        <br>
        过滤：<input type="text" @input="filterItem">
        <ul class="selector-list">
            <li
                v-for="item in list"
                :key="item"
                :data-search="item"
                class="selector-item">{{item}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CssSelectorMd from '../md/selector.md';

let scopedStyle: HTMLStyleElement;

@Component({
    name: 'CssSelector',
    components: {
        CssSelectorMd
    }
})
export default class CssSelector extends Vue {
    $refs!: any;
    list: string[] = ['重庆', '深圳', '北京', '宜春'];
    mounted() {
        scopedStyle = document.createElement('style');
        document.body.appendChild(scopedStyle);
    }
    filterItem(e: any) {
        scopedStyle.innerHTML = e.target.value ? `[data-search]:not([data-search*='${e.target.value}']){display:none;}` : '';
    }
}
</script>

<style>
.css-selector .box {
    color: red;
}
.box.box.box {
    color: blue;
}
#text#text{
    color: yellow;
}
.selector-item:not(:first-child) {
    color: red;
}
</style>
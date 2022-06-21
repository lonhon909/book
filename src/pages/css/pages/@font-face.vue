<template>
    <div class="cs-face">
        <FontFaceMd />
        <p class="cs-font-face">在CSS 3中，可以用@font-face属性来利用服务器端字体</p>
        <p>在CSS 3中，可以用@font-face属性来利用服务器端字体</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FontFaceMd from '../md/@font-face.md';

@Component({
    name: 'FontFace',
    components: {
        FontFaceMd
    }
})
export default class FontFace extends Vue {

}
</script>

<style>
@font-face {
  font-family: 'webfont';
  font-display: swap;
  src: url('@/assets/font2/qft.eot'); /* IE9*/
  src: url('@/assets/font2/qft.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('@/assets/font2/qft.woff2') format('woff2'),
    url('@/assets/font2/qft.woff') format('woff'), /* chrome、firefox */
    url('@/assets/font2/qft.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('@/assets/font2/qft.svg#Alibaba-PuHuiTi-Regular') format('svg'); /* iOS 4.1- */
}
.cs-face {
    font-size: 16px;
    line-height: 40px;
}
.cs-font-face {
    font-family: "webfont";
}
</style>
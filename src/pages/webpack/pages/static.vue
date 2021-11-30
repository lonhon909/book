<template>
    <div>
        <StaticSourceMd />
        <br>
        <ul class="static-image">
            <li v-for="item in 6">
                <img :src="`../../../../static/${item+1}.jpeg`" alt="">
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import StaticSourceMd from '../md/static.md';

@Component({
    name: 'StaticSource',
    components: {
        StaticSourceMd
    }
})
export default class StaticSource extends Vue {

}
</script>

<style lang="less" scoped>
.static-image {
    display: flex;
    flex-wrap: wrap;
    li {
        img {
            width: 100px;
            height: 100px;
            margin: 10px;
        }
    }
}
</style>
<template>
    <div>
        <InitDataMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import InitDataMd from '../md/initData.md';

@Component({
    name: 'InitData',
    components: {
        InitDataMd
    }
})
export default class InitData extends Vue {

}
</script>

<style>

</style>
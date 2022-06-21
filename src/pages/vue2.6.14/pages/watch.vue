<template>
    <div>
        <VueWatchMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VueWatchMd from '../md/watch.md';

@Component({
    name: 'VueWatch',
    components: {
        VueWatchMd
    }
})
export default class VueWatch extends Vue {

}
</script>

<style>

</style>
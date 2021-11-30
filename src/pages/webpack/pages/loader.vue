<template>
    <div>
        <WritingLoaderMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import data from './loader.txt';
import WritingLoaderMd from '../md/loader.md';

@Component({
    name: 'WritingLoader',
    components: {
        WritingLoaderMd
    }
})
export default class WritingLoader extends Vue {
    mounted() {
        console.log(data)
    }
}
</script>

<style>

</style>
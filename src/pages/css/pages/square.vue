<template>
    <div>
        <CssSquareMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CssSquareMd from '../md/square.md';

@Component({
    name: 'CssSquare',
    components: {
        CssSquareMd
    }
})
export default class CssSquare extends Vue {

}
</script>

<style>

</style>
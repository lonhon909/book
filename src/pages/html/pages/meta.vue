<template>
    <div>
        <HTMLMetaMd></HTMLMetaMd>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HTMLMetaMd from '../md/meta.md';

@Component({
    components: {
        HTMLMetaMd
    }
})
export default class HTMLMeta extends Vue {

}
</script>

<style>

</style>
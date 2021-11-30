<template>
    <div>
        <CssSupportsMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CssSupportsMd from '../md/supports.md';

@Component({
    name: 'CssSupports',
    components: {
        CssSupportsMd
    }
})
export default class CssSupports extends Vue {

}
</script>

<style>

</style>
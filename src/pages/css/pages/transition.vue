<template>
    <div>
        <CssTransitionMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CssTransitionMd from '../md/transition.md';

@Component({
    name: 'CssTransition',
    components: {
        CssTransitionMd
    }
})
export default class CssTransition extends Vue {

}
</script>

<style>

</style>
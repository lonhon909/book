<template>
    <div>
        <RegExpAssertionMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import RegExpAssertionMd from '../md/regExp.md';

@Component({
    name: 'ZeroWidthAssertion',
    components: {
        RegExpAssertionMd
    }
})
export default class RegExpAssertion extends Vue {

}
</script>

<style>

</style>
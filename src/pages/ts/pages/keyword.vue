<template>
    <div>
        <TsKeywordMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import TsKeywordMd from '../md/keyword.md';


function isNumber(val: unknown): val is number {
    return typeof val === 'number';
}
function isArray(val: unknown): boolean {
    return Array.isArray(val);
}

// function helloWorld(val: unknown) {
//     if (isNumber(val)) {
//         return val.toFixed(1);
//     }
//     if (isArray(val)) {
//         return val.length;
//     }
// }

@Component({
    name: 'TsKeyword',
    components: {
        TsKeywordMd
    }
})
export default class TsKeyword extends Vue {

}
</script>

<style>

</style>
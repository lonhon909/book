<template>
    <div>
        <OnlyImportExportStatementMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { fn } from './components/statement';
import type { OnlyOptions } from './components/statement';

import OnlyImportExportStatementMd from '../md/onlyImportExportStatement.md';

@Component({
    name: 'OnlyImportExportStatement',
    components: {
        OnlyImportExportStatementMd
    }
})
export default class OnlyImportExportStatement extends Vue {
    mounted() {
        const data: OnlyOptions = {
            name: '小微',
            age: 18
        }
        fn(data);
    }
}
</script>

<style>

</style>
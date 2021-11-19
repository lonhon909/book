<template>
    <div>namespace</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { checkAccount } from './validator';

@Component({
    name: 'TsNamespace'
})
export default class TsNamespace extends Vue {
    mounted() {
        checkAccount({
            account: '',
            password: ''
        });
    }
}
</script>

<style>

</style>
<template>
    <div>
        <KeyOfMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import KeyOfMd from '../md/keyof.md';

@Component({
    name: 'KeyOf',
    components: {
        KeyOfMd
    }
})
export default class KeyOf extends Vue {

}
</script>

<style>

</style>
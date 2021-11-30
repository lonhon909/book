<template>
    <div>
        <Es6StringMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Es6StringMd from '../md/string.md';

@Component({
    name: 'Es6String',
    components: {
        Es6StringMd
    }
})
export default class Es6String extends Vue {

}
</script>

<style>

</style>
<template>
    <div>
        <TypeOfMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TypeOfMd from '../md/typeof.md';

@Component({
    name: 'TypeOf',
    components: {
        TypeOfMd
    }
})
export default class TypeOf extends Vue {

}
</script>

<style>

</style>
<template>
    <div>
        <InitPropsMd />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import InitPropsMd from '../md/initProps.md';

@Component({
    name: 'InitProps',
    components: {
        InitPropsMd
    }
})
export default class InitProps extends Vue {

}
</script>

<style>

</style>
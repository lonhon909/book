<template>
  <div @click="onTarget">on</div>
</template>

<script>
import bus from './bus';

export default {
    methods: {
        onTarget() {
            bus.$emit('change', 'bus通讯');
        }
    }
}
</script>

<style>

</style>
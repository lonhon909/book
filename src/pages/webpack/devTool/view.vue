<template>
  <div>
    <DevTool></DevTool>
  </div>
</template>

<script>
import DevTool from './devTool.md';

export default {
  components: {
    DevTool
  },
  mounted() {
    console.log(100)
  }
}
</script>

<style>

</style>
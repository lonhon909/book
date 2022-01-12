<template>
  <div>
    <!-- <hh></hh> -->
    <EchartPieView />
  </div>
</template>

<script>
// import H from './h.md';
import { add } from '@/assets/js/utils';
import EchartPieView from './pie.vue';

export default {
  components: {
    // hh: H,
    EchartPieView
  },
  mounted() {
    console.log(add([1, 2, 3]))
  }
}
</script>

<style>

</style>
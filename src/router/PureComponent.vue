<template>
  <div class="view-container">
    <keep-alive :include="caches">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
    name: 'PureComponent',
    computed: {
        caches() {
            return this.$store.state.cachesIncludes
        }
    },
}
</script>

<style>
.view-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>
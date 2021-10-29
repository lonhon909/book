<template>
  <div class="view-container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta||!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.view-container {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
</style>
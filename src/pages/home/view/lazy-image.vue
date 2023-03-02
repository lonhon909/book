<template>
  <div>
    <div class="w200">
      <img v-lazy="lazy">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lazy: {
        src: 'https://testserver.comein.cn/comein-files//PPT/2023-01-04/12660422-4086-4f12-8660-5869ba789ee5/12660422-4086-4f12-8660-5869ba789ee5.jpg',
        loading: require('@/assets/ts/index.png').default,
        error: require('@/assets/ts/index.png')
      }
    };
  }
};
</script>

<style lang="less">
.w200 {
  width: 200px;
  height: 200px;
}
</style>

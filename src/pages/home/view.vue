<template>
  <div>
    <br>
    <Button type="primary" size="large" @click="jumpRoute('EchartPie')">echarts</Button>

    <Button type="primary" size="large" @click="jumpRoute('CacheRoute')">多级路由 keep-alive 缓存问题，路由级数不固定</Button>

    <Button type="primary" size="large" @click="jumpRoute('VerticalAlignLineHeight')">vertical-align 与 line-height的基友关系</Button>

    <Button type="primary" size="large" @click="jumpRoute('LazyImage')">图片懒加载 vue-lazyload</Button>

    <Button type="primary" size="large" @click="jumpRoute('betterScroll')">better-scroll</Button>

  </div>
</template>

<script>
import { add } from '@/assets/js/utils';

export default {
  mounted() {
    console.log(add([1, 2, 3]))
  },
  methods: {
    /**
     * @params { String } 命名路由名称
     * @params { Object|undefined } 路由参数 { query, params }
     */
    jumpRoute(routeName, data = {}) {
      this.$router.push({
        name: routeName,
        ...data
      });
    }
  }
}
</script>

<style>

</style>
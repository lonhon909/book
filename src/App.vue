<template>
  <div class="app" :style="{'--width':spread?'240px':'50px'}">
    <header class="app-top">
      <span class="icon iconfont" @click="spread=!spread">&#xe68a;</span>
    </header>
    <div class="app-center">
      <nav class="nav">
        <Menu
          mode="vertical"
          theme="dark"
          :accordion="true"
          width="240px"
          class="nav-bg">

          <Submenu
            v-for="item in menu"
            :key="item.id"
            :name="item.id">
            <template slot="title">
              <i class="icon iconfont icon-webpack"></i>
              {{item.title}}
            </template>
            <template v-for="data in item.children">
              <Submenu
                v-if="data.type === 'menu'"
                :key="data.id"
                :name="data.id">
                <template slot="title">{{data.title}}</template>
                <MenuItem
                  v-for="res in data.children"
                  :key="res.id"
                  :name="res.id"
                  :to="res.to">{{res.title}}</MenuItem>
              </Submenu>

              <MenuGroup
                v-else-if="data.type === 'group'"
                :key="data.id"
                :title="data.title">
                <MenuItem
                  v-for="res in data.children"
                  :key="res.id"
                  :name="res.id"
                  :to="res.to">{{res.title}}</MenuItem>
              </MenuGroup>

              <MenuItem
                v-else
                :key="data.id"
                :name="data.title"
                :to="data.to">{{data.title}}</MenuItem>
            </template>
          </Submenu>

        </Menu>
      </nav>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import menu from '@/router/menu';

export default {
  data() {
    return {
      menu,
      spread: true
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
}
.app-top {
  height: 64px;
  background-color: #515a6e;
  .iconfont {
    color: #fff;
    font-size: 20px;
    line-height: 64px;
    margin-left: calc(~'var(--width) - 20px');
    cursor: pointer;
  }
}
.app-center {
  height: calc(~'100vh - 64px');
  background-color: #fff;
  position: relative;
  display: flex;
  .nav {
    width: 240px;
    height: 100%;
    line-height: 16px;
  }
  .main {
    flex: 1;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
}
.nav-bg {
  height: 100%;
}
</style>
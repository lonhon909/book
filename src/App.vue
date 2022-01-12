<template>
    <div class="app">
        <header class="app-top">
            <p class="iconfont" @click="spread = !spread">&#xe6c0;</p>
        </header>
        <transition name="fade">
            <div class="app-center" v-show="spread">
                <nav class="nav">
                    <Menu
                        ref="menu"
                        mode="vertical"
                        theme="dark"
                        :accordion="true"
                        :active-name="activeName"
                        :open-names="openNames"
                        width="240px"
                        class="nav-bg">
                        <Submenu
                            v-for="item in menu"
                            :key="item.id"
                            :name="item.id">
                            <template slot="title">
                                <i class="iconfont" :class="item.icon"></i>
                                {{ item.title }}
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
                                        :to="res.to">{{ res.title }}</MenuItem>
                                </Submenu>

                                <MenuGroup
                                    v-else-if="data.type === 'group'"
                                    :key="data.id"
                                    :title="data.title">
                                    <MenuItem
                                        v-for="res in data.children"
                                        :key="res.id"
                                        :name="res.id"
                                        :to="res.to"
                                        >{{ res.title }}</MenuItem>
                                </MenuGroup>

                                <MenuItem
                                    v-else
                                    :key="data.id"
                                    :name="data.id"
                                    :to="data.to">{{ data.title }}</MenuItem>
                            </template>
                        </Submenu>
                    </Menu>
                </nav>
            </div>
        </transition>
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Menu from 'iview/src/components/menu';
import Submenu from 'iview/src/components/submenu';
import MenuItem from 'iview/src/components/menu-item';
import MenuGroup from 'iview/src/components/menu-group';

import menu from "@/router/menu";
import { isMobile } from "@/assets/js/utils";

export default {
    components: {
        Menu,
        Submenu,
        MenuItem,
        MenuGroup
    },
    data() {
        return {
            menu,
            spread: false,
            activeName: '',
            openNames: []
        };
    },
    created() {
        if (isMobile()) {
            this.spread = false;
        }
    },
    mounted() {
        const route = this.$router.resolve(location.pathname).route;
        if (route.path) {
            const result = menu.reduce((total, item) => {
                total[item.id] = (item.children || []).reduce((data, res) => {
                    if (Array.isArray(res.children)) {
                        data.push(...res.children);
                    } else {
                        data.push(res)
                    }
                    return data;
                }, []);
                return total;
            }, {});
            const keys = Object.keys(result);
            let flag = false;
            for (let i = 0; i < keys.length; i++) {
                if (flag) {
                    break;
                }
                for (let j = 0; j < result[keys[i]].length; j++) {
                    if (result[keys[i]][j].to === route.path) {
                        this.activeName = result[keys[i]][j].id;
                        this.openNames = [keys[i]];
                        flag = true;
                        break;
                    }
                }
            }
        }
        this.$nextTick(() => {
            if (this.activeName) {
                this.$refs.menu.updateOpened();
            }
        })
    },
};
</script>

<style lang="less" scoped>
.app {
    width: 100vw;
    height: 100vh;
    position: relative;
    padding-top: 64px;
    display: flex;
    .main {
        flex: 1;
        padding-left: 10px;
        overflow-y: auto;
        & > :only-child {
            width: 100%;
            height: 100%;
        }
    }
}
.app-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 64px;
    z-index: 100;
    background-color: #515a6e;
    .iconfont {
        display: inline-block;
        color: #fff;
        font-size: 20px;
        line-height: 64px;
        margin-left: 20px;
        cursor: pointer;
        user-select: none;
    }
}
.app-center {
    width: 240px;
    height: calc(~"100vh - 64px");
    background-color: #fff;
    position: relative;
    z-index: 1000;
    .nav {
        width: 240px;
        height: 100%;
        line-height: 16px;
    }
}
.nav-bg {
    height: 100%;
    overflow: auto;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    width: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
}
</style>
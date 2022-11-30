import Vue from 'vue';

import Router from 'vue-router';

Vue.use(Router);

const VueRouterPush = Router.prototype.push;

Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const router = new Router({
    history: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: 'home' */'../pages/home.vue')
        },
        {
            path: '/list',
            name: 'list',
            component: () => import(/* webpackChunkName: 'list' */'../pages/list.vue')
        }
    ]
})

export default router
import Vue from 'vue';
import Router from 'vue-router';
import PureComponent from './PureComponent';

Vue.use(Router);

const VueRouterPush = Router.prototype.push;

Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const router = new Router({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import(/* webpackChunkName: 'home' */'@/pages/home/view.vue')
        },
        {
            path: '/webpack',
            redirect: '/webpack/entry',
            component: PureComponent,
            children: require('@/pages/webpack/route').default,
        },
        {
            path: '/vue2',
            redirect: '/vue2/Array-Change-Detection',
            component: PureComponent,
            children: require('@/pages/vue2/route').default,
        },
        {
            path: '/parse',
            redirect: '/parse/entry',
            component: PureComponent,
            children: require('@/pages/vue2.6.14/route').default,
        },
        {
            path: '/ts',
            redirect: '/ts/ts-config',
            component: PureComponent,
            children: require('@/pages/ts/route').default
        },
        {
            path: '/es6',
            redirect: '/es6/regExp',
            component: PureComponent,
            children: require('@/pages/es6/route').default
        },
        {
            path: '/css',
            redirect: '/css/transition',
            component: PureComponent,
            children: require('@/pages/css/route').default
        },
        {
            path: '/js',
            redirect: '/js/requestAnimationFrame',
            component: PureComponent,
            children: require('@/pages/javascript/route').default
        },
        {
            path: '/web',
            redirect: '/web/ssh',
            component: PureComponent,
            children: require('@/pages/web/route').default
        },
    ]
});

router.beforeEach((to, from, next) => {
    next();
})


export default router;

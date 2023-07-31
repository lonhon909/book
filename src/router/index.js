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
            name: 'Home',
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
            redirect: '/css/effect',
            component: PureComponent,
            children: require('@/pages/css/route').default
        },
        {
            path: '/html',
            redirect: '/html/meta',
            component: PureComponent,
            children: require('@/pages/html/route').default
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
        {
            path: '/canvas',
            redirect: '/canvas/base',
            component: PureComponent,
            children: require('@/pages/canvas/route').default
        },
        {
            path: '/webgl',
            redirect: '/webgl/base',
            component: PureComponent,
            children: require('@/pages/webgl/route').default
        },
        {
            path: '/tools',
            redirect: '/tools/charles',
            component: PureComponent,
            children: require('@/pages/tools/route').default
        },
        ...require('@/pages/home/route').default
    ]
});

router.beforeEach((to, from, next) => {
    next();
})


export default router;

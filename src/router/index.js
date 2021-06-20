import Vue from 'vue';
import Router from 'vue-router';
import PureComponent from './PureComponent';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
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
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to, from, to === from)
    next();
})


export default router;

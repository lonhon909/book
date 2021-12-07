export default [
    {
        path: 'regExp',
        name: 'regExp',
        component: () => import(/* webpackChunkName: 'regExp' */'./pages/regExp.vue')
    },
    {
        path: 'string',
        name: 'string',
        component: () => import(/* webpackChunkName: 'string' */'./pages/string.vue')
    },
    {
        path: 'Reflect',
        name: 'Reflect',
        component: () => import(/* webpackChunkName: 'Reflect' */'./pages/Reflect.vue')
    }
];

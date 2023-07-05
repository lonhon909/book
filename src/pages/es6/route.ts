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
        path: 'number',
        name: 'es6number',
        component: () => import(/* webpackChunkName: 'es6number' */'./pages/number.vue')
    },
    {
        path: 'object',
        name: 'es6object',
        component: () => import(/* webpackChunkName: 'es6object' */'./pages/object.vue')
    },
    {
        path: 'array',
        name: 'es6array',
        component: () => import(/* webpackChunkName: 'es6array' */'./pages/array.vue')
    },
    {
        path: 'operator',
        name: 'es6operator',
        component: () => import(/* webpackChunkName: 'es6operator' */'./pages/operator.vue')
    },
    {
        path: 'Reflect',
        name: 'Reflect',
        component: () => import(/* webpackChunkName: 'Reflect' */'./pages/Reflect.vue')
    }
];

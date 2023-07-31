export default [
    {
        path: 'charles',
        name: 'Charles',
        component: () => import(/* webpackChunkName: 'Charles' */'./pages/charles.vue')
    },
]
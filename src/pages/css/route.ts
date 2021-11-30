export default [
    {
        path: 'transition',
        name: 'css-transition',
        component: () => import(/* webpackChunkName: 'css-transition' */'./pages/transition.vue')
    },
    {
        path: 'supports',
        name: 'css-supports',
        component: () => import(/* webpackChunkName: 'css-supports' */'./pages/supports.vue')
    },
    {
        path: 'grid',
        name: 'css-grid',
        component: () => import(/* webpackChunkName: 'css-grid' */'./pages/grid.vue')
    },
    {
        path: 'square',
        name: 'css-square',
        component: () => import(/* webpackChunkName: 'css-square' */'./pages/square.vue')
    },
];

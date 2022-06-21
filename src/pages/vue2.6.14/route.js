export default [
    {
        path: 'entry',
        name: 'Vue2ParseEntry',
        component: () => import(/* webpackChunkName: 'vue2-parse-entry' */'./pages/entry.vue'),
    },
    {
        path: 'watch',
        name: 'Vue2ParseWatch',
        component: () => import(/* webpackChunkName: 'vue2-parse-watch' */'./pages/watch.vue'),
    },
    {
        path: 'initProps',
        name: 'Vue2ParseInitProps',
        component: () => import(/* webpackChunkName: 'vue2-parse-initProps' */'./pages/initProps.vue'),
    },
    {
        path: 'initData',
        name: 'Vue2ParseInitData',
        component: () => import(/* webpackChunkName: 'vue2-parse-initData' */'./pages/initData.vue'),
    },
];

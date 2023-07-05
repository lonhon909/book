export default [
    {
        path: 'entry',
        name: 'Vue2ParseEntry',
        component: () => import(/* webpackChunkName: 'vue2-parse-entry' */'./pages/entry.vue'),
    },
    {
        path: 'initGlobalAPI',
        name: 'initGlobalAPI',
        component: () => import(/* webpackChunkName: 'initGlobalAPI' */'./pages/initGlobalAPI.vue'),
    },
    {
        path: 'resolveConstructorOptions',
        name: 'resolveConstructorOptions',
        component: () => import(/* webpackChunkName: 'resolveConstructorOptions' */'./pages/resolveConstructorOptions.vue'),
    },
    {
        path: 'watch',
        name: 'Vue2ParseWatch',
        component: () => import(/* webpackChunkName: 'vue2-parse-watch' */'./pages/watch.vue'),
    },
    {
        path: 'initState',
        name: 'initState',
        component: () => import(/* webpackChunkName: 'initState' */'./pages/initState.vue'),
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
    {
        path: 'eventsMixin',
        name: 'eventsMixin',
        component: () => import(/* webpackChunkName: 'eventsMixin' */'./pages/eventsMixin.vue'),
    },
    {
        path: 'initProvide_initInjections',
        name: 'initProvide_initInjections',
        component: () => import(/* webpackChunkName: 'initProvide_initInjections' */'./pages/initProvide&initInjections.vue'),
    },
];

export default [
    {
        path: 'requestAnimationFrame',
        name: 'RequestAnimationFrameDemoMd',
        component: () => import(/* webpackChunkName: 'RequestAnimationFrameDemoMd' */'./pages/requestAnimationFrame.vue')
    },
    {
        path: 'markdown',
        name: 'markdown',
        component: () => import(/* webpackChunkName: 'markdown' */'./pages/markdown.vue')
    }
];

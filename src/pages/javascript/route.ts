export default [
    {
        path: 'requestAnimationFrame',
        name: 'RequestAnimationFrameDemoMd',
        component: () => import(/* webpackChunkName: 'RequestAnimationFrameDemoMd' */'./pages/requestAnimationFrame.vue')
    }
];

export default [
    {
        path: 'requestAnimationFrame',
        name: 'RequestAnimationFrameDemoMd',
        component: function () { return import(/* webpackChunkName: 'RequestAnimationFrameDemoMd' */ './pages/requestAnimationFrame.vue'); }
    },
    {
        path: 'markdown',
        name: 'markdown',
        component: function () { return import(/* webpackChunkName: 'markdown' */ './pages/markdown.vue'); }
    }
];

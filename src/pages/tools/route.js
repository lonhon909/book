export default [
    {
        path: 'charles',
        name: 'Charles',
        component: function () { return import(/* webpackChunkName: 'Charles' */ './pages/charles.vue'); }
    },
];

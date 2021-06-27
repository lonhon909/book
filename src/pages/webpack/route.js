export default [
    {
        path: 'entry',
        name: 'webpack-entry',
        component: () => import(/* webpackChunkName: 'webpackentry' */'./entry/view.vue'),
    },
    {
        path: 'htmlWebpackPlugin',
        name: 'webbpack-htmlWebpackPlugin',
        component: () => import(/* webpackChunkName: 'webpackhtmlWebpackPlugin' */'./plugins/htmlWebpackPlugin.vue')
    },
    {
        path: 'devTool',
        name: 'webpack-devTool',
        component: () => import(/* webpackChunkName: 'webpackdevTool' */'./devTool/view.vue'),
    }
];

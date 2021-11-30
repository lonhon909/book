export default [
    {
        path: 'install',
        name: 'webpack-install',
        component: () => import(/* webpackChunkName: 'webpackInstall' */'./pages/install.vue')
    },
    {
        path: 'html-webpack-plugin',
        name: 'webpack-htmlWebpackPlugin',
        component: () => import(/* webpackChunkName: 'webpackhtmlWebpackPlugin' */'./pages/htmlWebpackPlugin.vue')
    },
    {
        path: 'clean-webpack-plugin',
        name: 'webpack-clean-webpack-plugin',
        component: () => import(/* webpackChunkName: 'webpackCleanWebpackPlugin' */'./pages/clean-webpack-plugin.vue')
    },
    {
        path: 'webpack-dev-server',
        name: 'webpack-webpack-dev-server',
        component: () => import(/* webpackChunkName: 'webpackWebpackDevServer' */'./pages/webpack-dev-server.vue')
    },
    {
        path: 'css',
        name: 'webpack-css',
        component: () => import(/* webpackChunkName: 'webpackCss' */'./pages/css.vue')
    },
    {
        path: 'entry',
        name: 'webpack-entry',
        component: () => import(/* webpackChunkName: 'webpackentry' */'./pages/entry.vue'),
    },
    {
        path: 'devtool',
        name: 'webpack-devtool',
        component: () => import(/* webpackChunkName: 'webpackdevtool' */'./pages/devtool.vue'),
    },
    {
        path: 'babel',
        name: 'es-babel',
        component: () => import(/* webpackChunkName: 'webpackBabel' */'./pages/babel.vue'),
    },
    {
        path: 'loader',
        name: 'xxx-loader',
        component: () => import(/* webpackChunkName: 'xxx-loader' */'./pages/loader.vue'),
    },
    {
        path: 'static',
        name: 'static',
        component: () => import(/* webpackChunkName: 'static' */'./pages/static.vue'),
    },
];

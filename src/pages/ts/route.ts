export default [
    {
        path: 'ts-config',
        name: 'TsConfig',
        component: () => import(/* webpackChunkName: 'ts-config' */'./pages/ts-config.vue')
    },
    {
        path: 'interface',
        name: 'interface',
        component: () => import(/* webpackChunkName: 'interface' */'./pages/interface.vue')
    },
    {
        path: 'class',
        name: 'ts-class',
        component: () => import(/* webpackChunkName: 'ts-class' */'./pages/class.vue')
    },
    {
        path: 'enum',
        name: 'ts-enum',
        component: () => import(/* webpackChunkName: 'ts-enum' */'./pages/enum.vue')
    },
    {
        path: 'genericity',
        name: 'ts-genericity',
        component: () => import(/* webpackChunkName: 'ts-genericity' */'./pages/genericity.vue')
    },
    {
        path: 'declare',
        name: 'DeclarationDocuments',
        component: () => import(/* webpackChunkName: 'declaration-documents' */'./pages/DeclarationDocuments.vue')
    },
    {
        path: 'namespace',
        name: 'namespace',
        component: () => import(/* webpackChunkName: 'namespace' */'./pages/namespace/index.vue')
    },
];

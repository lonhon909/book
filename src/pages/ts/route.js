export default [
    {
        path: 'ts-config',
        name: 'TsConfig',
        component: function () { return import(/* webpackChunkName: 'ts-config' */ './pages/ts-config.vue'); },
    },
    {
        path: 'interface',
        name: 'interface',
        component: function () { return import(/* webpackChunkName: 'interface' */ './pages/interface.vue'); }
    },
    {
        path: 'class',
        name: 'ts-class',
        component: function () { return import(/* webpackChunkName: 'ts-class' */ './pages/class.vue'); }
    },
    {
        path: 'enum',
        name: 'ts-enum',
        component: function () { return import(/* webpackChunkName: 'ts-enum' */ './pages/enum.vue'); }
    },
    {
        path: 'genericity',
        name: 'ts-genericity',
        component: function () { return import(/* webpackChunkName: 'ts-genericity' */ './pages/genericity.vue'); }
    },
    {
        path: 'declare',
        name: 'DeclarationDocuments',
        component: function () { return import(/* webpackChunkName: 'declaration-documents' */ './pages/DeclarationDocuments.vue'); },
    },
    {
        path: 'namespace',
        name: 'namespace',
        component: function () { return import(/* webpackChunkName: 'namespace' */ './pages/namespace/index.vue'); },
    },
    {
        path: 'statement',
        name: 'statement',
        component: function () { return import(/* webpackChunkName: 'statement' */ './pages/onlyImportExportStatement.vue'); },
    },
    {
        path: 'typeof',
        name: 'typeof',
        component: function () { return import(/* webpackChunkName: 'typeof' */ './pages/typeof.vue'); },
    },
    {
        path: 'keyof',
        name: 'keyof',
        component: function () { return import(/* webpackChunkName: 'keyof' */ './pages/keyof.vue'); },
    },
    {
        path: 'keyword',
        name: 'keyword',
        component: function () { return import(/* webpackChunkName: 'keyword' */ './pages/keyword.vue'); },
    },
];

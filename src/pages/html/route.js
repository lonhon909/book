export default [
    {
        path: 'meta',
        name: 'HTMLMeta',
        component: function () { return import(/* webpackChunkName: 'htmlmeta' */ './pages/meta.vue'); }
    },
    {
        path: 'blob',
        name: 'BlobFile',
        component: function () { return import(/* webpackChunkName: 'blobfile' */ './pages/blob.vue'); }
    }
];

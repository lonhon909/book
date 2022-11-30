export default [
    {
        path: 'meta',
        name: 'HTMLMeta',
        component: () => import(/* webpackChunkName: 'htmlmeta' */'./pages/meta.vue')
    },
    {
        path: 'blob',
        name: 'BlobFile',
        component: () => import(/* webpackChunkName: 'blobfile' */'./pages/blob.vue')
    }
];

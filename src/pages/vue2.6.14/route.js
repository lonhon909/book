export default [
    {
        path: 'entry',
        name: 'Vue2ParseEntry',
        component: () => import(/* webpackChunkName: 'vue2-parse-entry' */'./pages/1_entry.vue'),
    }
];

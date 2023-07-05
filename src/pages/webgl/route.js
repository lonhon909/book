export default [
    {
        path: 'coordinate',
        name: 'CoordinateSystem',
        component: () => import(/* webpackChunkName: 'coordinate' */'./pages/coordinate-system.vue')
    }
];

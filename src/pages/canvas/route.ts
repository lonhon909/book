export default [
    {
        path: 'base',
        name: 'CanvasBase',
        component: () => import(/* webpackChunkName: 'CanvasBase' */'./pages/canvas.vue')
    },
    {
        path: 'fillStyle',
        name: 'FillStyle',
        component: () => import(/* webpackChunkName: 'FillStyle' */'./pages/fillStyle.vue')
    },
    {
        path: 'strokeStyle',
        name: 'StrokeStyle',
        component: () => import(/* webpackChunkName: 'StrokeStyle' */'./pages/strokeStyle.vue')
    },
];

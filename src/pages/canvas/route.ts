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
    {
        path: 'shadow',
        name: 'Shadow',
        component: () => import(/* webpackChunkName: 'Shadow' */'./pages/shadow.vue')
    },
    {
        path: 'rect',
        name: 'Rect',
        component: () => import(/* webpackChunkName: 'Rect' */'./pages/rect.vue')
    },
    {
        path: 'path',
        name: 'BeginPath',
        component: () => import(/* webpackChunkName: 'BeginPath' */'./pages/path.vue')
    },
];

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
    {
        path: 'font',
        name: 'FontText',
        component: () => import(/* webpackChunkName: 'FontText' */'./pages/font.vue')
    },
    {
        path: 'drawImage',
        name: 'DrawImage',
        component: () => import(/* webpackChunkName: 'DrawImage' */'./pages/drawImage.vue')
    },
    {
        path: 'globalAlpha',
        name: 'GlobalAlpha',
        component: () => import(/* webpackChunkName: 'GlobalAlpha' */'./pages/globalAlpha.vue')
    },
    {
        path: 'line',
        name: 'CanvasLine',
        component: () => import(/* webpackChunkName: 'CanvasLine' */'./pages/line.vue')
    },
    {
        path: 'scale-rotate-translate-transform',
        name: 'ScaleRotateTranslateTransform',
        component: () => import(/* webpackChunkName: 'ScaleRotateTranslateTransform' */'./pages/scale-rotate-translate-transform.vue')
    },
    {
        path: 'save-restore',
        name: 'SaveRestore',
        component: () => import(/* webpackChunkName: 'SaveRestore' */'./pages/save-restore.vue')
    },
    {
        path: 'toDataURL',
        name: 'ToDataURL',
        component: () => import(/* webpackChunkName: 'ToDataURL' */'./pages/toDataURL.vue')
    },
];

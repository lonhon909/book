export default [
    {
        path: 'base',
        name: 'CanvasBase',
        component: function () { return import(/* webpackChunkName: 'CanvasBase' */ './pages/canvas.vue'); }
    },
    {
        path: 'fillStyle',
        name: 'FillStyle',
        component: function () { return import(/* webpackChunkName: 'FillStyle' */ './pages/fillStyle.vue'); }
    },
    {
        path: 'strokeStyle',
        name: 'StrokeStyle',
        component: function () { return import(/* webpackChunkName: 'StrokeStyle' */ './pages/strokeStyle.vue'); }
    },
    {
        path: 'shadow',
        name: 'Shadow',
        component: function () { return import(/* webpackChunkName: 'Shadow' */ './pages/shadow.vue'); }
    },
    {
        path: 'rect',
        name: 'Rect',
        component: function () { return import(/* webpackChunkName: 'Rect' */ './pages/rect.vue'); }
    },
    {
        path: 'path',
        name: 'BeginPath',
        component: function () { return import(/* webpackChunkName: 'BeginPath' */ './pages/path.vue'); }
    },
    {
        path: 'font',
        name: 'FontText',
        component: function () { return import(/* webpackChunkName: 'FontText' */ './pages/font.vue'); }
    },
    {
        path: 'drawImage',
        name: 'DrawImage',
        component: function () { return import(/* webpackChunkName: 'DrawImage' */ './pages/drawImage.vue'); }
    },
    {
        path: 'globalAlpha',
        name: 'GlobalAlpha',
        component: function () { return import(/* webpackChunkName: 'GlobalAlpha' */ './pages/globalAlpha.vue'); }
    },
    {
        path: 'line',
        name: 'CanvasLine',
        component: function () { return import(/* webpackChunkName: 'CanvasLine' */ './pages/line.vue'); }
    },
    {
        path: 'scale-rotate-translate-transform',
        name: 'ScaleRotateTranslateTransform',
        component: function () { return import(/* webpackChunkName: 'ScaleRotateTranslateTransform' */ './pages/scale-rotate-translate-transform.vue'); }
    },
    {
        path: 'save-restore',
        name: 'SaveRestore',
        component: function () { return import(/* webpackChunkName: 'SaveRestore' */ './pages/save-restore.vue'); }
    },
    {
        path: 'toDataURL',
        name: 'ToDataURL',
        component: function () { return import(/* webpackChunkName: 'ToDataURL' */ './pages/toDataURL.vue'); }
    },
];

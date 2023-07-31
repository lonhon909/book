export default [
    {
        path: 'effect',
        name: 'css-effect',
        component: () => import(/* webpackChunkName: 'css-effect' */'./pages/effect.vue')
    },
    {
        path: 'selector',
        name: 'css-selector',
        component: () => import(/* webpackChunkName: 'css-selector' */'./pages/selector.vue')
    },
    {
        path: 'font-face',
        name: 'FontFace',
        component: () => import(/* webpackChunkName: 'fontFace' */'./pages/@font-face.vue')
    },
    {
        path: 'transition',
        name: 'css-transition',
        component: () => import(/* webpackChunkName: 'css-transition' */'./pages/transition.vue')
    },
    {
        path: 'supports',
        name: 'css-supports',
        component: () => import(/* webpackChunkName: 'css-supports' */'./pages/supports.vue')
    },
    {
        path: 'grid',
        name: 'css-grid',
        component: () => import(/* webpackChunkName: 'css-grid' */'./pages/grid.vue')
    },
    {
        path: 'square',
        name: 'css-square',
        component: () => import(/* webpackChunkName: 'css-square' */'./pages/square.vue')
    },
    {
        path: 'layers',
        name: 'css-layers',
        component: () => import(/* webpackChunkName: 'css-layers' */'./pages/layers.vue')
    },
    {
        path: 'gradient',
        name: 'css-gradient',
        component: () => import(/* webpackChunkName: 'css-gradient' */'./pages/gradient.vue')
    },
];

export default [
    {
        path: 'Array-Change-Detection',
        name: 'Array-Change-Detection',
        component: () => import(/* webpackChunkName: 'Array-Change-Detection' */'./pages/Array-Change-Detection.vue')
    },
    {
        path: 'event-modifier',
        name: 'event-modifier',
        component: () => import(/* webpackChunkName: 'event-modifier' */'./pages/event-modifier.vue')
    },
    {
        path: 'transition-animation',
        name: 'transition-animation',
        component: () => import(/* webpackChunkName: 'transition-animation' */'./pages/transition-animation.vue')
    },
    {
        path: 'v-model',
        name: 'v-model',
        component: () => import(/* webpackChunkName: 'v-model' */'./pages/v-model.vue')
    },
    {
        path: 'jsx',
        name: 'v-jsx',
        component: () => import(/* webpackChunkName: 'v-jsx' */'./pages/jsx.js')
    },
    {
        path: 'render',
        name: 'v-render',
        component: () => import(/* webpackChunkName: 'render' */'./pages/render.js')
    },
    {
        path: 'directives',
        name: 'directives',
        component: () => import(/* webpackChunkName: 'directives' */'./pages/directives.vue')
    },
];

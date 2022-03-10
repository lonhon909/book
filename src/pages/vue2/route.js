export default [
    {
        path: 'Array-Change-Detection',
        name: 'ArrayChangeDetection',
        component: () => import(/* webpackChunkName: 'Array-Change-Detection' */'./pages/Array-Change-Detection.vue')
    },
    {
        path: 'event-modifier',
        name: 'EventModifier',
        component: () => import(/* webpackChunkName: 'event-modifier' */'./pages/event-modifier.vue'),
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
    {
        path: 'Vue-extend',
        name: 'vue-extend',
        component: () => import(/* webpackChunkName: 'vue-extend' */'./pages/Vue.extend.vue')
    },
    {
        path: 'next-tick',
        name: 'next-tick',
        component: () => import(/* webpackChunkName: 'next-tick' */'./pages/next-Tick.vue')
    },
    {
        path: 'keep-alive',
        name: 'VueKeepAlive',
        component: () => import(/* webpackChunkName: 'keep-alive' */'./pages/keep-alive.vue')
    },
    {
        path: 'async-component',
        name: 'AsyncComponentView',
        component: () => import(/* webpackChunkName: 'async-component' */'./pages/async-component.vue')
    },
    {
        path: 'forceUpdate',
        name: 'forceUpdate',
        component: () => import(/* webpackChunkName: 'forceUpdate' */'./pages/forceUpdate.vue')
    },
    {
        path: 'set',
        name: 'VueSet',
        component: () => import(/* webpackChunkName: 'VueSet' */'./pages/$set.vue')
    },
    {
        path: 'vuex',
        name: 'VuexDemo',
        component: () => import(/* webpackChunkName: 'VuexDemo' */'./pages/VuexDemo.vue')
    },
    {
        path: 'on-delete-once-watch',
        name: 'on-delete-once-watch',
        component: () => import(/* webpackChunkName: 'on-delete-once-watch' */'./pages/$on$delete$watch$once.vue')
    },
];

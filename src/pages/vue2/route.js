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
        name: 'keep-alive',
        component: () => import(/* webpackChunkName: 'keep-alive' */'./pages/keep-alive.vue')
    },
    {
        path: 'async-component',
        name: 'async-component',
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
];

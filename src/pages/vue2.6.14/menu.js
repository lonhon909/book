export default {
    id: 'vue2.6.14',
    title: 'vue2.6.14源码解析',
    icon: 'icon-Vue',
    type: 'menu',
    children: [
        {
            id: 'entry',
            title: 'Vue 初始化',
            to: '/parse/entry'
        },
        {
            id: 'initGlobalAPI',
            title: 'initGlobalAPI 全局API',
            to: '/parse/initGlobalAPI'
        },
        {
            id: 'resolveConstructorOptions',
            title: 'resolveConstructorOptions 解析默认配置',
            to: '/parse/resolveConstructorOptions'
        },
        {
            id: 'watch',
            title: 'Vue.watch原理',
            to: '/parse/watch'
        },
        {
            id: 'initState',
            title: '初始化 props methods data computed watch',
            to: '/parse/initState'
        },
        {
            id: 'initProps',
            title: 'props 初始化处理',
            to: '/parse/initProps'
        },
        {
            id: 'initData',
            title: 'data 响应式处理',
            to: '/parse/initData'
        },
        {
            id: 'eventsMixin',
            title: '$on|$once|$off|$emit',
            to: '/parse/eventsMixin'
        },
        {
            id: 'initProvide_initInjections',
            title: 'initProvide && initInjections',
            to: '/parse/initProvide_initInjections'
        },
    ]
};

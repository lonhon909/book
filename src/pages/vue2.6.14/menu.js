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
            id: 'watch',
            title: 'Vue.watch原理',
            to: '/parse/watch'
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
        }
    ]
};

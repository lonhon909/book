export default {
    id: 'ts',
    title: 'TypeScript',
    icon: 'icon-typescript',
    type: 'menu',
    children: [
        {
            id: 'ts-config',
            title: 'webpack配置ts',
            to: '/ts/ts-config'
        },
        {
            id: 'interface',
            title: '接口-interface',
            to: '/ts/interface'
        },
        {
            id: 'class',
            title: '类-class',
            to: '/ts/class'
        },
        {
            id: 'enum',
            title: '枚举-enum',
            to: '/ts/enum'
        },
        {
            id: 'genericity',
            title: '泛型-genericity',
            to: '/ts/genericity'
        },
    ]
};

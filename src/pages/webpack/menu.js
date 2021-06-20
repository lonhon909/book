export default {
    id: 'webpack',
    title: 'webpack',
    icon: '#xe799;',
    type: 'menu',
    children: [
        {
            id: 'webpack-entry',
            title: 'entry',
            to: '/webpack/entry'
        },
        {
            id: 'webpack-plugins',
            title: 'plugins',
            type: 'group',
            children: [
                {
                    id: 'webpack-plugins-html-webpack-plugin',
                    title: 'html-webpack-plugin',
                    to: '/webpack/htmlWebpackPlugin'
                }
            ]
        },
        {
            id: 'webpack-3',
            title: 'webpack-3',
            type: 'group',
            children: [
                {
                    id: 'webpack-3-1',
                    title: 'webpack-3-1'
                }
            ]
        }
    ]
};

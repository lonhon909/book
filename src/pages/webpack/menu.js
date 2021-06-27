export default {
    id: 'webpack',
    title: 'webpack',
    icon: 'icon-webpack',
    type: 'menu',
    children: [
        {
            id: 'webpack-entry',
            title: '入口',
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
            id: 'webpack-devTool',
            title: 'devTool',
            to: '/webpack/devTool'
        }
    ]
};

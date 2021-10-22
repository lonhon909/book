export default {
    id: 'webpack',
    title: 'webpack',
    icon: 'icon-webpack',
    type: 'menu',
    children: [
        {
            id: 'webpack-install',
            title: '安装与配置',
            to: '/webpack/install'
        },
        {
            id: 'webpack-entry',
            title: '入口',
            to: '/webpack/entry'
        },
        {
            id: 'webpack-dev-server',
            title: 'webpack-dev-server',
            to: '/webpack/webpack-dev-server'
        },
        {
            id: 'webpack-plugins',
            title: 'plugins',
            type: 'group',
            children: [
                {
                    id: 'webpack-HtmlWebpackPlugin',
                    title: 'html-webpack-plugin',
                    to: '/webpack/html-webpack-plugin'
                },
                {
                    id: 'webpack-CleanWebpackPlugin',
                    title: 'clean-webpack-plugin',
                    to: '/webpack/clean-webpack-plugin'
                },
            ]
        },
        {
            id: 'webpack-devTool',
            title: 'devTool',
            to: '/webpack/devTool'
        }
    ]
};

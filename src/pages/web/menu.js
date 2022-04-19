export default {
    id: 'web',
    title: 'web',
    icon: 'icon-web',
    type: 'menu',
    children: [
        {
            id: 'ssh',
            title: 'ssh',
            to: '/web/ssh'
        },
        {
            id: 'three-way-handshake',
            title: '三次握手',
            to: '/web/three-way-handshake'
        },
        {
            id: 'git',
            title: 'git',
            to: '/web/git'
        }
    ]
};
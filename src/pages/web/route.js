export default [
    {
        path: 'ssh',
        name: 'ssh-info',
        component: () => import(/* webpackChunkName: 'sshInfo' */'./pages/ssh.vue')
    },
    {
        path: 'three-way-handshake',
        name: 'ThreeWayHandshake',
        component: () => import(/* webpackChunkName: 'ThreeWayHandshake' */'./pages/Three-way-handshake.vue')
    },
    {
        path: 'git',
        name: 'GitAction',
        component: () => import(/* webpackChunkName: 'GitAction' */'./pages/git.vue')
    },
    {
        path: 'crypto',
        name: 'crypto-info',
        component: () => import(/* webpackChunkName: 'cryptoInfo' */'./pages/crypto.vue')
    }
];
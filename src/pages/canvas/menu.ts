export default {
    id: 'canvas',
    title: 'canvas',
    icon: 'icon-canvas',
    type: 'menu',
    children: [
        {
            id: 'canvasBase',
            title: 'canvas',
            to: '/canvas/base'
        },
        {
            id: 'fillStyle',
            title: 'fillStyle 设置填充色',
            to: '/canvas/fillStyle'
        },
        {
            id: 'strokeStyle',
            title: 'strokeStyle 设置描边色',
            to: '/canvas/strokeStyle'
        },
        {
            id: 'shadow',
            title: 'shadow 阴影相关',
            to: '/canvas/shadow'
        },
        {
            id: 'rect',
            title: 'rect 矩形',
            to: '/canvas/rect'
        },
        {
            id: 'path',
            title: 'beginPath 路径相关',
            to: '/canvas/path'
        },
    ]
};

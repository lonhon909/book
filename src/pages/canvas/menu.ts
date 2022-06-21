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
            title: 'fillStyle设置填充色',
            to: '/canvas/fillStyle'
        },
        {
            id: 'strokeStyle',
            title: 'strokeStyle画笔的颜色',
            to: '/canvas/strokeStyle'
        },
    ]
};

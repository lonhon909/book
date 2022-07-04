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
        {
            id: 'font',
            title: 'fontText 文本 + 字体',
            to: '/canvas/font'
        },
        {
            id: 'drawImage',
            title: 'drawImage 图像绘制',
            to: '/canvas/drawImage'
        },
        {
            id: 'globalAlpha',
            title: 'globalAlpha 设置透明度',
            to: '/canvas/globalAlpha'
        },
        {
            id: 'line',
            title: 'line 线条样式',
            to: '/canvas/line'
        },
        {
            id: 'scale-rotate-translate-transform',
            title: 'scale-rotate-translate',
            to: '/canvas/scale-rotate-translate-transform'
        },
        {
            id: 'save-restore',
            title: 'save-restore 保存状态',
            to: '/canvas/save-restore'
        },
        {
            id: 'toDataURL',
            title: 'toDataURL + toBlob',
            to: '/canvas/toDataURL'
        },
    ]
};

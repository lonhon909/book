import VueRenderMd from '../md/render.md';

export default {
    name: 'VueRender',
    components: {
        VueRenderMd,
        NameHeading: {
            name: 'NameHeading',
            props: {
                lavel: {
                    type: Number,
                    required: true,
                },
            },
            render(h) {
                return h(
                    'h' + this.lavel,
                    this.$slots.default
                )
            }
        }
    },
    render(h) {
        return h('div', {}, [
            h('VueRenderMd'),
            h('br'),
            Array.apply(null, { length: 6 }).map((undefined, index) => h('NameHeading', {
                props: {
                    lavel: index + 1
                }
            }, index + 1))
        ])
    }
}
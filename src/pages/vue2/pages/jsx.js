import JsxMd from '../md/jsx.md';

const TextChildren = {
    inheritAttrs: false,
    props: {
        text: {
            type: String,
            required: true
        },
        value: Number
    },
    data () {
        return {
            num: 1
        }
    },
    mounted() {
        console.log(this.$props, this.$attrs)
    },
    render() {
        return (
            <div onClick={this.handleChange}>
                {
                    this.$attrs.list.map((item) => <p>{item}</p>)
                }
                {
                    this.$slots.header || <header class="header">默认header</header>
                }
                {
                    this.$slots.default
                }
                {
                    /* 作用域插槽 子组件 */
                    this.$scopedSlots.footer({
                        title: this.num
                    })
                }
                {/* v-on函数(vOn)，事件修饰符(vOn:click_stop_prevent) */}
                <Button
                    // vOn:click={this.add}
                    // 没有修饰符时可以用onClick（同React）
                    onClick={this.add}
                >v-model {this.value}</Button>
            </div>
        )
    },
    methods: {
        add() {
            this.$emit('input', this.value + 1)
        },
        handleChange() {
            this.$emit('change')
        }
    },
}

// 函数式组件
const HelloWorld = ({ props }) => <p>{props.text}</p>

export default {
    name: 'VueJsx',
    // jsx 导入组件可直接使用
    // components: {},
    props: {
        age: {
            type: Number,
            default: 18
        }
    },
    data () {
        return {
            name: '使用变量用单大括号',
            arr: [1, 2],
            target: {
                text: 'text',
                title: 'title'
            },
            value: 1,
        }
    },
    render() {
        const html = '<i>icon</i>';
        return (
            <div>
                <JsxMd />
                <br />
                <p>age: {this.age}，{this.name}</p>
                <br />
                <TextChildren
                    /* 单个props */
                    list={this.arr}
                    /* 多个props */ // https://blog.csdn.net/tzllxya/article/details/92840142
                    {...{ props: this.target }}
                    /* 作用域插槽 */
                    scopedSlots={{
                        footer: props => <div>{props.title}--作用域插槽</div>
                    }}
                    // v-model(vModel)，v-model.trim(vModel_trim)
                    vModel={this.value}
                    // v-on 
                    vOn:change={this.handleChange}
                    // 监听根元素原生事件
                    nativeOnClick={this.handleNativeOnClick}
                    
                    // class="red"
                    // class
                    class={{blue: true, red: this.red === undefined}}
                    // style="border:1px solid #eee"
                    style={{display: this.display ? 'none' : 'block'}}
                    ref="ref"
                >
                    {/* 命名插槽 */}
                    <header slot="header">header</header>
                    This is jsx
                    <p domPropsInnerHTML={html}></p>
                </TextChildren>
                <br />
                <HelloWorld text={this.target.text} />
            </div>
        )
    },
    methods: {
        handleChange() {
            console.log('handleChange')
        },
        handleNativeOnClick(e) {
            console.log(e)
        }
    },
}
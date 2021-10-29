# `JSX` 语法

```js
// https://github.com/vuejs/jsx
npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props

// .babelrc
{
    "presets": [
        "@vue/babel-preset-jsx"
    ]
}
```

```jsx
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
}
```

# initProps

## Props 原理

```js
Vue.prototype._init = function(options) {
    const vm = this;
    ...
    initState(vm)
    ...
}
function initState(vm) {
    ...
    if (opts.props) initProps(vm, opts.props)
    ...
}

function initProps(vm, propsOptions) {}
```
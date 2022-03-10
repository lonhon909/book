#

`Vue` 构造函数 在 `src\core\instance\index.js` 下

```js
// Vue 构造器，仅在 new Vue() 时调用
function Vue (options) {
  // _init 在 initMixin 中定义
  this._init(options)
}
```
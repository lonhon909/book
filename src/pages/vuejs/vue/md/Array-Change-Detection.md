### 数组更新检测

```js
// Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

```js
// vue内部实现 vue/src/core/observer/array.js

const arrayProto = Array.prototype
// vue内部使用arrayMethods创建数组
export const arrayMethods = Object.create(arrayProto)
// 变异方法
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsToPatch.forEach(function (method) {
  // 暂存真实数组方法
  const original = arrayProto[method]
  // def：Object.defineProperty(Obj, key, val)，arrayMethods上的方法被改变了
  def(arrayMethods, method, function mutator (...args) {
    // 当vue内部使用这些变异方法时，会调用真实的数组方法
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // 通知vue数据变化
    ob.dep.notify()
    return result
  })
})
```
# `$nextTick` 源码

`Vue` 异步执行 `DOM` 更新。只要观察到数据变化，`Vue` 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 `watcher` 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 `DOM` 操作上非常重要。然后，在下一个的事件循环“`tick`”中，`Vue` 刷新队列并执行实际 (已去重的) 工作。

```js
// 回调队列
const callbacks = []
// 第一次调用this.$nextTick时，将回调队列需要执行的函数放入 Promise.then 中，利用js的事件循环，当主线程空时执行微任务then
let pending = false

// 执行回调并清空
function flushCallbacks () {
  pending = false
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

let timerFunc
// Vue内部优先使用Promise.then
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}

export function nextTick (cb, ctx) {
  let _resolve
    // 回调不会立即执行，而是加入异步队列中，等待js主线程为空，依次执行循环中微任务；
    // 同一轮tick中多此执行nextTick都会加入
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  if (!pending) {
    pending = true
    timerFunc()
  }
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```

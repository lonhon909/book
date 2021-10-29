# transition & animation

过渡类名 `6` 类

+ `v-enter` -- 定义过渡`进入`的开始状态
+ `v-enter-active` -- 定义过渡`进入`过程状态，整个过渡`进入`阶段中应用
+ `v-enter-to` -- 定义过渡`进入`的结束状态
+ `v-leave` -- 定义过渡`离开`的开始状态
+ `v-leave-active` -- 定义过渡`离开`的过程状态，整个过渡`离开`阶段中应用
+ `v-leave-to` -- 定义过渡`离开`的结束状态

自定义类名

通过以下 `attribute` 来自定义过渡类名，他们的`优先级高于`普通的类名

+ `enter-class`
+ `enter-active-class`
+ `enter-to-class`
+ `leave-class`
+ `leave-active-class`
+ `leave-to-class`

```html
<transition
    enter-class="enter-view"
    enter-active-class="enter-active-view"
    enter-to-class="enter-to-view"
    leave-class="leave-to"
    leave-active-class="leave-active-view"
    leave-to-class="leave-to-view">
    <div class="wh80" v-show="visible">自定义类名</div>
</transition>
```

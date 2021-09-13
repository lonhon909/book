### css 原生动画

+ 过渡动画

  + transition需要事件触发
  + transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态

```css
.app {
    width: 100px;
    height: 100px;
    /* all */
    transition: all 2s;
    /* 单个属性 */
    transition: width 2s;
    /* 多个属性 */
    transition: width 2s, height 2s;
    /* 全属性 */
    transition: transition-property transition-duration transition-timing-function transition-delay;
    /* 可以解析为时间的第一个值被分配给 transition-duration，并且可以解析为时间的第二个值被分配给transition-delay */
    transition: 2s all ease 1s;
    transition: width 2s linear 2s, height 1s ease 0s;
}
.app:hover {
    width: 200px;
    height: 200px;
}
```

```js
// transition动画结束时会触发过渡动画函数
const appNode = document.querySelector('.app');
app.addEventListener('WebkitTransitionEnd', () => {
    // 多个属性会触发多次
})
```

+ 关键帧动画

属性|说明|示例
|:--|:--|:--
animation-name | 关键帧名称，@keyframe创建
animation-duration | 动画持续时间 | 2s/2000ms
animation-timing-function | 动画速度曲线 | ease/linear
animation-delay | 延时执行动画，允许负值 |-2s表示跳过动画开头的2秒
animation-iteration-count | 动画执行次数 | n/infinite（无限次重复动画）
animation-direction | 规定动画重复运行时的方向 | normal（正常）/alternate（轮流反向播放）
animation-fill-mode | 指定动画执行前后如何为目标元素应用样式 | none/forwards/backwards/both

```css
.animat {
    width: 100px;
    height: 100px;
    background-color: blanchedalmond;
    opacity: 0.1;
}
.animat:hover {
    animation: name 2s ease 100ms infinite alternate forwards;
}
@keyframes name {
    from {
        background-color: blue;
    }
    to {
        width: 300px;
        height: 300px;
        background-color: red;
    }
}
```

```js
// 添加动画事件监听器
const e = document.getElementById("animat");
e.addEventListener("animationstart", fn, false);
e.addEventListener("animationend", fn, false);
e.addEventListener("animationiteration", fn, false);

function fn(e) {}
```

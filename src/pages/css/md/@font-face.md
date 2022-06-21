# @font-face

```css
@font-face { 
 font-family: 'webfont'; 
 src: url('icon.eot');
 src: url('icon.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('icon.woff2') format("woff2"), /* woff2 是比 woff 尺寸更小的字体，首选 woff2 */
    url('icon.woff') format("woff"), /* chrome、firefox */
    url('icon.ttf') format("typetrue"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('icon.svg#icon') format('svg');  /* iOS 4.1- */
    font-weight: normal; 
    font-style: normal; 
}
```

+ eot：eot 格式是 IE 私有的

+ woff：woff:web open font format 专门为 Web 开发而设计的字体
+ woff2：woff2 是比 woff 尺寸更小的字体，首选 woff2
+ ttf：尺寸大了点儿，优点在于老版本 Android 也支持
+ svg：svg 格式是为了兼容 iOS 4.1 及其之前的版本

## 1、`format()` 的作用

让浏览器提前知道字体的格式，以决定是否需要加载这个字体，而不是加载完了之后再自动判断，否则会加载多个字体

## 2、`#iefix` 的作用

是这样的，IE9 之前的版本解析有一个严重的问题，当 src
属性包含多个 url()时，会把长长的字符当作一个地址解析而返回 404 错误。因此把 eot
格式放在第一位，然后在字体文件 url 地址后加上问号，这样 IE9 之前的版本会把问号之后
的内容当作 url 的参数

## 3、为什么需要两个 src

也是 IE 7 8 的兼容问题，它不识别 `?#iefix` 的解决方案，导致无法识别第二个 src，不得已再加一个 src
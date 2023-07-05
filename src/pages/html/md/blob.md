# Blob File FileReader

```html
<input type="file" @change="handleChange($event.target.files[0])">
```

```js
// File 是特殊的 Blob，File对象通常来源于 input[type=file]
handleChange(file) {
    console.log(file instanceof File) // true
    console.log(file instanceof Blob) // true
}
```

#### File - 构造函数

```js
// 语法：new File(bits, name[, options])
new File(['Hello'], 'h.txt', {
    type: 'text/plain'
})
```

#### Blob - 构造函数

```js
// 语法：new Blob(array, options)
new Blob(['hello'], {
    type: 'text/plain'
}) // Blob {size: 5, type: 'text/plain'} size：大小字节数，type：文件的 MIME 类型
```
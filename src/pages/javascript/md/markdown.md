# Markdown 语法

| 元素 | 语法 |
| -------------------- | ------ |
| 标题 | # H1<br> ## H2<br> ### H3  |
| 加粗 | `**bold text**` |
| 斜体 | `*Italic text*` |
| 加粗+斜体 | `***text***` |
| 块引用 | > text |
| 有序列表 | 1. item1<br> 2. item2<br> 3. item3 |
| 无序列表 | - item1<br> - item2<br> - item3 |
| 代码输出 | \`code\` 反引号包含 |
| 水平分割线 | ---、===、*** 或者数量更多 |
| 链接 | `[title](https://www.example.com)` |
| 图片 | `![alt text](image.jpg)` |
| 表格 | \| key \| value \|<br>\|: ------ \| -------- :\| 冒号表示居左居右居中<br>\| age \| 18 \|<br>\| name \| 张曦 \| |
| 代码块 | \```js<br>code ...<br>\``` |
| 脚注 | Here's a sentence with a footnote. [^1] |
| 描点跳转 | 格式：` [描点](#heading-ids)` [点击描点](#heading-ids) |
| 删除线 | 格式：`~~删除线~~` ~~删除线~~ |
| 任务列表 | - [x] Write the press release<br>- [ ] Update the website<br>- [ ] Contact the media |
| 高亮 | `==高亮==` |

+ 标题
+ 段落
+ 列表
+ 水平分割线，在一行上单独使用三个或更多星号(***)、破折号(---)或下划线(___)
+ 链接，`格式：[链接文案](url)` [链接文案](https://www.markdownguide.org/basic-syntax/) 
+ 图片，`格式：![alt文案](url)`

## <font id="heading">1、标题</font>
```html
<!-- 标题 -->
# header1
## header2
### header3
```

## <font id="paragraphs">2、段落</font>

- `换行` 两个空格+enter 或者 `<br>` 标签
- `加粗` 前后各两个**星号**
- `斜体` 前后各一个*星号*
- `粗体+斜体` 前后各三个***星号***
- `区块` 文本前加 `>`，嵌套块文本前加 `>>`

换行请使用两个及以上  
空格再加enter换行即可，也可以使用`<br>`<br>标签，**加粗的文本前后个两个星号**

> 区块
>> 嵌套块区块

## <font id="list">3、列表</font>

+ 有序列表 行项目前添加`数字+.`
+ 无序列表 行项目前添加破折号(-)、星号(*)或加号(+)

***

1. First
2. Second
3. Third
    1. Indented
    2. Indented
4. Fourth
```html
1. First
2. Second
3. Third
    1. Indented
    2. Indented
4. Fourth
```

## <font id="image">4、图片</font>

![图片](https://media.ethicalads.io/media/images/2022/07/hearham.png)

```html
![图片](https://media.ethicalads.io/media/images/2022/07/hearham.png)
```


[^1]: This is the footnote.
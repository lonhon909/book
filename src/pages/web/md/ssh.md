# SSH

```js
// 测试
ssh -T git@github.com
```

```js
// ssh远程登录
// 如：ssh -p 10086 root@123.201.21.153
ssh -p port username@host
```

```js
// ssh上传与下载
// 上传
scp -P port -r /local/dir username@host:/remote/dir
// 如：scp -P 22 -r ./dist root@123.201.21.153:/usr/share/nginx/html

// 下载
scp -P port -r username@host:/remote/dir /local/dir
```
# SSH

SSH（Secure Shell）安全外壳协议，专为远程登录会话和其他网络服务提供安全性的协议

```js
// 测试
ssh -T git@github.com
```

### 1、ssh登录

```js
// ssh远程登录，新设备第一次登录会提示是否允许
// 如：ssh -p 10086 root@123.201.21.153
// 参数 p 为指定端口
ssh -p port username@hostname
// 参数 l 可以不用 @ 链接用户名与主机
ssh -l username hostname

```
#### 秘钥登录

这样不用每次都输入密码，使用 ssh-keygen 生成客户端秘钥，将公钥上传到 服务器 `~/.ssh/authorized_keys` 文件，可以手动拷贝到改文件中

![秘钥登录](/static/web/miyaossh.png)


### scp 拷贝命令

+ 将本地文件拷贝到远程

```js
// 用法
scp source username@hostname:source
// 将本地 /dist/readme.txt 拷贝到远程 /remote/dir 文件下
scp /dist/readme.txt root@123.158.12.88:/remote/dir
// 参数 r 以递归方式复制目录
scp -r /dist root@123.158.12.88:/remote/dir
// 拷贝 dist 目录下的文件到远程
scp -r /dist/* root@123.158.12.88:/remote/dir
```

+ 将远程服务器文件拷贝到本地

```js
// 将远程 remote 下的所有文件拷贝到本地 dist 目录下
scp -r root@123.158.12.88:/remote/* /dist
```

+ 两个远程服务器之间的拷贝

```js
// 从主机 hostname1 remote目录拷贝到 hostname2 remote文件目录下
scp user1@hostname1:/remote user2@hostname2:/remote
```

```js
// ssh上传与下载
// 参数 P 指定端口
scp -P port -r /local/dir username@hostname:/remote/dir
// 如：scp -P 22 -r ./dist root@123.201.21.153:/usr/share/nginx/html

// 下载
scp -P port -r username@hostname:/remote/dir /local/dir
```

### sftp 命令

```js
// sftp是 SSH 提供的一个客户端应用程序，主要用来安全地访问 FTP
// 登录
sftp username@hostname
// 本地文件传输到远程主机
put localfile [remotefile]
// 远程文件传输到本地
get remotefile [localfile]
```
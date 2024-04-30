const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const start = require('./index');

const app = express();

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'GET,DELETE,OPTIONS,POST,PUT');
    next();
})


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ txtended: false }))
//parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
});

app.post('/download', (req, res) => {

    console.log('开始下载')
    console.log('-----')
    start({
        m3u8: req.body.m3u8,
        host: req.body.host
    }, req.body.filename || '视频').then(() => {
        console.log('下载完成')
        console.log('-----')
    }).catch(() => {
        console.log('下载失败')
        console.log('-----')
    })

    res.send(JSON.stringify({
        code: 0,
        msg: '下载服务已启动'
    }))
})

app.listen(3001, () => {
    console.log('服务启动成功，正在监听3001端口')
});
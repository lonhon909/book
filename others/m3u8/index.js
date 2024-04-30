const fs = require('fs');
const path = require('path');
const request = require('request');
const child_process = require('child_process');
const fsextra = require('fs-extra');

const files = require('./file');

const num = 5;

const start = (data, dir) => {
    if (!data.host) {
        const h = data.m3u8.split('/');
        h.pop();
        data.host = h.join('/') + '/'
    }

    return new Promise((resolve, reject) => {
        request({
            url: data.m3u8
        }, (err, response) => {
            console.log('开始获取 .m3u8 文件')
            console.log('-----')
            if (err) {
                console.log('获取 .m3u8 文件失败')
                console.log('-----')
                console.log(err)

                reject(err)
                return;
            }
            
            if (response.statusCode === 200) {
                
                const source = response.body;
                
                const arr = source.split(/[\n\r]/).filter((item) => item.match(/\.ts$/));

                console.log(`获取 .m3u8 文件成功，共有 ${arr.length} 个文件`)
                console.log('-----')
        
                const max = arr.length;
        
                const tempTs = path.join(__dirname, 'dist/' + dir);
        
                createDirFile(tempTs);
        
                const resultDir = path.join(__dirname, 'result');
        
                createDirFile(resultDir);
        
                const resultFile = path.join(resultDir, `${dir}.mp4`);

                if (fs.existsSync(resultFile)) {
                    resolve()
                    return;
                }
        
                const tempList = [];

                let k = 0;
        
                const load = () => {
                    const item = arr[k];
                    if (!item) {
                        return;
                    }
                    k ++;
        
                    const nm = path.parse(item.split('?')[0]);
        
                    request({
                        url: data.host + item
                    }, (err, response) => {
                        if (err) {
                            reject(err)
                            return;
                        }
                        if (response.statusCode === 200) {
                            console.log(`${k} / ${arr.length}`)
                            load()
                        }
        
                        tempList.push(`file ${nm.name + nm.ext}`)
                
                        if (tempList.length === max) {
                            console.log("下载完成--开始生成配置文件");
                            console.log('-----')
        
                            tempList.unshift("ffconcat version 1.0");
        
                            try {
                                fs.writeFileSync(path.join(tempTs, "./input.txt"), tempList.join("\n") , undefined, 'utf-8')
        
                                console.log('配置文件生成完成')
                                console.log('-----')
                            } catch (e) {
                                console.log("写入配置出错--",e);
                                console.log('-----')
                                return ;
                            }
        
                            console.log('开始合成视频')
                            console.log('-----')
        
                            child_process.exec(`cd ${tempTs} && ffmpeg -i input.txt -acodec copy -vcodec copy -absf aac_adtstoasc ${resultFile}`, (err, data) => {
                                if (err) {
                                    console.log('合成视频失败', err)
                                    console.log('-----')
                                    return;
                                }
                                console.log('合成视频成功')
                                console.log('-----')

                                
                                // console.log('开始删除临时文件')
                                
                                fsextra.remove(tempTs, (err) => {
                                    if (!err) {
                                        // console.log('删除临时文件成功')
                                    } else {
                                        // console.log('删除临时文件失败', err)
                                    }
                                })
                                resolve()
                            })
                        }
        
                    }).pipe(fs.createWriteStream(path.join(tempTs, item)))
                }
        
                for (let i = 0; i < num; i++) {
                    load()
                }
            }
        });
    })
}

let i = 0;
function fn() {
    const n = i + 1;
    console.log(`第${n}个视频 -- 开始下载`)
    console.log('-----')
    start(files[i], i).then(() => {
        console.log(`第${n}个视频 -- 下载成功`)
    }).catch((err) => {
        console.log(`第${n}个视频 -- 下载失败`)
        console.log(err)
    }).finally(() => {
        i ++;
        if (i <= files.length - 1) {
            fn()
        }
    })
}

function createDirFile(url) {
    if (!fs.existsSync(url)) {
        // recursive 创建多层
        fs.mkdirSync(url, { recursive: true })
    }
}

// fn()

module.exports = start;
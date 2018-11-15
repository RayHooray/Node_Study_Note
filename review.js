const http = require('http');
const fs = require('fs');
const url = require('url')
const path = require('path')

//创建服务
//回调函数表示每次请求后所做的操作
const server = http.createServer(function (req,res) {
    //判断用户是否是文件夹地址，如果是文件夹地址，则自动请求这个文件夹中的index.html
    //如果是文件地址
    let pathname = url.parse(req.url).pathname
    /*let filePath = path.normalize('./static/' + pathname)*/
    let extname = path.extname(pathname)
    console.log(pathname)
    //indexOf():查询某个指定字符串中，首次出现查询对象的位置，如果没有，则返回-1
    if(pathname.indexOf('.') == -1) {
        pathname += '/index.htnl'
    } else if (pathname == '/favicon.ico') {
        return
    }
    //设置响应头
    fs.readFile('./static' + pathname, function (err, file) {
        let mime = getMime(extname)
        //err表示文件不存在的时候报错
        if (err) {
            fs.readFile('./static/404.html', function(err, file) {
                if (err) {
                    throw err
                } else {
                    res.writeHead(404)
                    res.end(file)
                }
            })
        } else {
            res.writeHead(200, {"Content-Type": mime})
            res.end(file)
        }
    })
});

server.listen(4000, "127.0.0.1", function (err) {
    if (err) {
        throw err
    } else {
        console.log("it's start")
    }
});

function getMime(extname) {
    switch (extname) {
        case '.html':
            return 'text/html';
            break
        case '.css':
            return 'text/css';
            break
        case '.png':
            return 'image/jpg'
        break
    }
}
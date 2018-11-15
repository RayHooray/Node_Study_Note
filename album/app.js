const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path')
require('./db')

const server = http.createServer(function (req, res) {
    //得到用户的路径
    let pathname = url.parse(req.url).pathname;
    //扩展名
    let extanme = path.extname(pathname)
    //路由设置
    //默认首页
    if (pathname == '/') {
        pathname = 'index.html';
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                console.log(err)
            } else {
                res.end(data)
            }
        })
        return ;
    }
    //读取这个文件
    fs.readFile('./static' + pathname, function (err, data) {
        if (err) {
            //没有这个路径
            console.log(err)
            fs.readFile('./static/404.html', function (err, data) {
                if (err) {
                    console.log(err)
                } else {
                    res.writeHead(404, {"Content-Type":"text/html;charset=UTF-8"});
                    res.end(data)
                }
            });
        } else {
            //设置mime类型
            const mime = getMIME(extanme)
            res.writeHead(200, {"Content-Type":mime});
            res.end(data)
        }
    })
})

function getMIME (extname) {
    switch (extname) {
        case ".html":
            return "text/html";
        case ".jpg":
            return "image/jpg";
        case ".css":
            return "text/css"
    }
}


server.listen(3000, "127.0.0.1", function () {
    console.log('it is start')
})
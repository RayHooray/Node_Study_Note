const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        //得到请求地址
        let pathname = url.parse(req.url).pathname;
        //判断此时输入的地址是文件夹地址还是文件地址
        /*let fileUrl = path.normalize('./' + pathname);*/
        console.log(pathname);
        /*console.log('fileURL:',fileUrl);*/
        fs.readFile("./static/index.html", function (err, data) {
            if (err) {
                console.log(err)
            } else {
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
                res.end(data)
            }
        })
    } else {
        fs.readFile('./static/404.html', function (err, data) {
            if (err) {
                console.log(err)
                throw err
            } else {
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
                res.end(data)
            }
        })
    }
})

server.listen(4000, "127.0.0.1", function (err) {
    if (err) {
        throw err
    } else {
        console.log("it's start!")
    }
})
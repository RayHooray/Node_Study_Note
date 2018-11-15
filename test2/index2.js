const http = require('http')
const fs = require('fs')
const path = require('path')
const querystring = require('querystring')
const formidable = require('formidable')
const util = require('util')
const server = http.createServer(function (req, res) {
    if (req.url == '/') {
        fs.readFile(__dirname + '/static/Post.html', function (err, data) {
            if (err) {
                console.log(err)
            } else {
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                res.end(data)
            }
        })
    } else if (req.url == '/dopost' && req.method.toLocaleLowerCase() == 'post') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            res.writeHead(200, {"Content-Type":"text/plain;charset=UTF-8"})
            res.write("received upload:\n\n")
            res.end(util.inspect({fields: fields, files: files}))
        })
        let alldata = "";
        req.addListener("data", function (chunk) {
            //每一个chunk都是一个两位的16进制的数
            alldata += chunk;
            console.log(chunk)
        })
        req.addListener("end", function () {
            let dataStr = alldata.toString();
            /*console.log(dataStr);
            let dataArr = dataStr.split('&');
            console.log(dataArr);
            let obj = {};
            dataArr.forEach((val) => {
                let arr = val.split('=');
                obj[arr[0]] = arr[1]
                return obj
            })
            console.log(obj)*/
            let dataObj = querystring.parse(dataStr)
            console.log(dataStr)
        });
        res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"});
        res.end('发送成功')
    }
})

server.listen(4000, "127.0.0.1", function () {
    console.log("The server is start")
})
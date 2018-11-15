
//两种方法等价
/*
const buf = Buffer.alloc(20).fill('hello world').fill('hello China')
const buf2 = Buffer.alloc(10, 'hello China')

console.log(buf, buf2)

const http = require('http')
http.createServer((req, res) => {

})*/

//异步读取数据
/*fs.readFile('logo.png', function (err, data) {
    if(err) {
        console.log(err)
    } else {
        console.log(data);
        console.log(data.length + 'byte')
        console.log(data.toString())
        console.log(Buffer.from(data.toString(), 'utf-8'))
    }
});*/

//同步读取数据
/*
console.log(fs.readFileSync('3d.html', 'utf-8'));

try {
    var data = fs.readFileSync('3d.html', 'utf-8');
    console.log(data)
} catch (err) {
    console.log(err)
}*/

/*
fs.stat('3d.html', function (err, stat) {
    if (err) {
        console.log(err)
    } else {
        console.log('isFlie:' + stat.isFile())
        console.log('isDirectory:' + stat.isDirectory())
        if (stat.isFile()) {
            console.log('size:', stat.size)
            console.log('birthTime:', stat.birthtime)
            console.log('modified time:', stat.mtime)
        }
    }
})*/
var http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url == '/index') {
        fs.readFile('./3d.html', function (err, data) {
            if (err) {
                console.log(err)
            } else {
                //req,代表请求
                /*fs.readFile('./logo.png', function (err, data) {
                    console.log('hello')
                })*/
                res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
                res.end(data)
            }
        })

    }
    else if (req.url == '/IGV.png') {
        fs.readFile('./IGV.png', function (err, data) {
            if (err) {
                console.log(err)
            } else {
                res.writeHead(200, {"Content-Type":"image/png"})
                res.end(data)
            }
        })
    }
    else if (req.url == '/hello') {
        res.end("hello world")
    }
    else {
        res.writeHead(404, {"Content-Type":"text/html;charset=UTF-8"})
        res.end('这里是404哦')
    }
});

server.listen(3000, "127.0.0.1", function () {
    console.log('server is start')
});

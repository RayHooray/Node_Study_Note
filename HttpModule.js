const http = require('http')

//创建一个服务其，回调函数表示接收到请求后的操作
const server = http.createServer(function (req, res) {
    console.log(res.url)
    if (req.url == '/') {
        console.log("服务器接收到了请求：" + req.url)
        res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})
        res.end("<h1>success</h1>")
    }
});

server.listen(3000, "127.0.0.1", function () {
    console.log("服务器已经启动")
});


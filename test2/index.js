const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./router');


//__dirname 此文件的当前绝对地址
fs.readFile(__dirname + '/src/1.txt', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
});

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        router.showIndex(req,res)
    } else if (req.url == '/student') {
        router.showStudent(req, res)
    }
    else {
        router.show404(req, res)
    }

})

server.listen(3000, "127.0.0.1", function (err) {
    if (err) {
        console.log(err)
        throw err
    } else {
        console.log("server is start")
    }
})
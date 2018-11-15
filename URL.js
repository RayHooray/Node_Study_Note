const http = require('http');
const url = require('url')
const fs = require('fs')
/*const server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname
    var query = url.parse(req.url,true).query
    console.log(query)
    res.end(pathname)
})*/

const server = http.createServer(function (req, res) {
    let userId = parseInt(Math.random() * 89999) + 10000
    console.log(userId,'it is start')
    res.writeHead(200, {"Content-Type":"text/html;charset=UTF-8"})
    fs.readFile('./1.txt', function (err, data) {
      if (err) {
          throw err;
      } else {
          console.log(userId)
          res.end(data.toString())
          console.log(userId, 'it is finished')
      }
    })
})
server.listen(3000)
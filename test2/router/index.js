

function showIndex( req, res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
    res.end("首页")
}

function showStudent(req, res) {
    let userId = parseInt(Math.random() * 89999) + 10000
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"})
    res.end("学生页面" + userId)
}

function show404(req, res) {
    res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"})
    res.end("404")
}

module.exports = {showIndex, showStudent, show404}
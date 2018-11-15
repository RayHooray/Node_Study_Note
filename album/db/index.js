const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test1', {useNewUrlParser: true});

mongoose.connection.once('open', function (err) {
    if (err) {
        console.log(err)
        throw err
    } else {
        console.log('数据库已经连接')
    }
})
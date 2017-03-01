var mongoose,
    db;

mongoose = require('mongoose');
db = mongoose.connection;

mongoose.connect('mongodb://localhost/Chenxi');

db.on('error',console.error.bind(console,'连接错误：'));
db.once('open',function(){
    console.log('成功链接数据库 Chenxi');
})

module.exports = db;
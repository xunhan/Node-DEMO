
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Chenxi');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'连接错误：'));
db.once('open',()=>{
    console.log('成功链接数据库 Chenxi');
})

module.exports = db;
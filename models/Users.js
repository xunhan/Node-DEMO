var mongoose,
    userSchema,
    User;

mongoose = require('mongoose');

// 构建 成员 Schema
userSchema = new mongoose.Schema({
    'username':String,
    'password':String,
});
// 唯一索引
userSchema.index({ "username": 1});

User = mongoose.model('User',userSchema);

// 接口
module.exports = {
    'getAllUsers':getAllUsers,
    'addUser':addUser,
    'findUser':findUser
}

function getAllUsers(cb){
    User.find({},(err,result)=>{
        cb(err,result);
    })
}
// 添加成员
function addUser(obj,cb){
    User.create(obj,(err,result)=>{
        cb(err,result);
    })
}

function findUser(obj,cb){
    User.find(obj,(err,result)=>{
        cb(err,result);
    })
}

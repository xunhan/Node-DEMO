const mongoose = require('mongoose');

// 构建 成员 Schema
const userSchema = new mongoose.Schema({
    'username':String,
    'password':String,
});
// 唯一索引
userSchema.index({ "username": 1});

const User = mongoose.model('User',userSchema);

const getAllUsers = (cb)=>{
    User.find({},(err,result)=>{
        cb(err,result);
    })
}
// 添加成员
const addUser = (obj,cb)=>{
    User.create(obj,(err,result)=>{
        cb(err,result);
    })
}

const findUser = (obj,cb)=>{
    User.find(obj,(err,result)=>{
        cb(err,result);
    })
}
module.exports = {
    'getAllUsers':getAllUsers,
    'addUser':addUser,
    'findUser':findUser
}
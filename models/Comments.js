const mongoose = require('mongoose');

// 构建 成员 Schema
const commentSchema = new mongoose.Schema({
    'username':String,
    'date':String,
    'content':String
});
// 唯一索引

const Comment = mongoose.model('Comment',commentSchema);

const getAllComments = (cb)=>{
    Comment.find({},null,{sort:{'_id':-1}},(err,result)=>{
        cb(err,result);
    })
}
// 添加成员
const addComment = (obj,cb)=>{
    Comment.create(obj,(err,result)=>{
        cb(err,result);
    })
}

const findByNameComment = (obj,cb)=>{
    Comment.find(obj,null,{sort:{'_id':-1}},(err,result)=>{
        cb(err,result);
    })
}
module.exports = {
    'getAllComments':getAllComments,
    'addComment':addComment,
    'findByNameComment':findByNameComment
}
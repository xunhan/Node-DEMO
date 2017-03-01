var mongoose,
    commentSchema,
    Comment;

mongoose = require('mongoose');

// 构建 成员 Schema
commentSchema = new mongoose.Schema({
    'username':String,
    'date':String,
    'content':String
});

Comment = mongoose.model('Comment',commentSchema);

// 接口
module.exports = {
    'getAllComments':getAllComments,
    'addComment':addComment,
    'findByNameComment':findByNameComment
}

function getAllComments(cb){
    Comment.find({},null,{sort:{'_id':-1}},function(err,result){
        cb(err,result);
    })
}
// 添加成员
function addComment(obj,cb){
    Comment.create(obj,function(err,result){
        cb(err,result);
    })
}

function findByNameComment(obj,cb){
    Comment.find(obj,null,{sort:{'_id':-1}},function(err,result){
        cb(err,result);
    })
}



var express = require('express');
var router = express.Router();
var Comment = require('../models/Comments');

router.get('/', function(req, res, next) {
    Comment.addComment(req.query,function(err,result){
        if(err){
            return res.send(err);
        };
        res.send('1');
    })
});

module.exports = router;
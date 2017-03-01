var router = require('express').Router(),
    Comment = require('../models/Comments');
    
/* GET home page. */
router.get('/', function(req, res, next) {
  Comment.getAllComments(function(err,result){
    if(err){
        return res.send(err);
    };
    if(req.session.login === '1'){
      res.render('index',{
        'username':req.session.username,
        'login':'1',
        'allComments':result
      });
    }else{
      res.render('index',{
        'username':"",
        'login':0,
        'allComments':[]
      })
    }
  })
  
});

module.exports = router;

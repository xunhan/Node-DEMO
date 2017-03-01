var router = require('express').Router(),
    formidable = require('formidable'),
    Users = require('../models/Users');

router.post('/', function(req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
      if(err){
          return res.send(err);
      };
      var prefields = {'username':fields.username};
      Users.findUser(prefields,function(err,result){
        if(result.length === 0){
          Users.addUser(fields,(err,result)=>{
              var hour = 60 * 60 * 100;
              req.session.login = '1';
              req.session.username = fields.username;
              req.session.cookie.expires = new Date(Date.now() + hour);
              req.session.cookie.maxAge = hour;
              res.send('1');
          })
        }else{
          res.send('-1');
        }
      })
      
    })
});

module.exports = router;

var express = require('express');
var formidable = require('formidable');
var Users = require('../models/Users')
var router = express.Router();


router.post('/', function(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
      if(err) throw err;
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

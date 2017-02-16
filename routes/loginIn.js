var express = require('express');
var Users = require('../models/Users');
var router = express.Router();


router.get('/', function (req, res, next) {
  Users.findUser(req.query, function (err, result1) {
    if(err){
        return res.send(err);
    };
    if (result1.length === 1) {
      var hour = 60 * 60 * 100;
      req.session.login = '1';
      req.session.username = req.query.username;
      req.session.cookie.expires = new Date(Date.now() + hour);
      req.session.cookie.maxAge = hour;
      res.send('1');
    } else {
      Users.findUser(req.query.username, function (err, result2) {
        if(err){
            return res.send(err);
        };
        if (result2.length !== 1) {
          res.send('-1');
        } else {
          res.send('-2');
        }
      })
    }
  })

});

module.exports = router;
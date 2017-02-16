var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var db = require('./models/db.js');

var session = require('express-session');

app.set('trust proxy', 1) // trust first proxy 
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

var index = require('./routes/index');
var users = require('./routes/users');
var regist = require('./routes/regist');
var register = require('./routes/register');
var login = require('./routes/login');
var loginIn = require('./routes/loginIn');
var sendComment = require('./routes/comment');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/regist',regist);
app.use('/register', register);

app.use('/login',login);
app.use('/loginIn',loginIn);

app.use('/sendComment',sendComment);

app.use('/users', users);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



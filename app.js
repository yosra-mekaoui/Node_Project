//des packages prédifine hadhrin
var createError = require('http-errors');
var http=require("http") 
var express = require('express');//dependance ta3 creation du projet 
var path = require('path');
var cookieParser = require('cookie-parser');//marat ybloquik kif t3adi fi navigateur el cokies ybloquik , ma y9blkch donnée mahomch mparsin
var logger = require('morgan');//y5arch les fichier log exp:(404)

var indexRouter = require('./routes/index');//9a3din n'importiou f les fichier te3na
var usersRouter = require('./routes/users');//9a3din n'importiou f les fichier te3na
var studentRouter = require('./routes/student');
var osRouter = require('./routes/os');
var productsRouter = require('./routes/products');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//na3tih chemin eli hwa dirname
app.set('view engine', 'twig');//bch naamlou appel lel partie twig

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student',studentRouter);
app.use('/os',osRouter);
app.use('/products',productsRouter)


const server = http.createServer(app);
server.listen(3000, () => console.log("server run with port 3000 "));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

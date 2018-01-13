
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var index = require('./routes/index');
var savedata = require('./routes/savedata');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/savedata', savedata);

app.get('/deletedata', function(req,res){
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE1"
    });

    //res.send((req.query.num_sir));
    var num_sir = parseInt(req.query.num_sir);

    con.connect(function(err) 
    {
      if (err) throw err;
      con.query("DELETE FROM partenaires WHERE num_sir = "+num_sir, function (err, result) {
      if (err) res.send(err);
      res.send("query success");
    });
    });
});

app.post('/add', function(req,res){
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE1"
    });

    var num_sir = req.query.num_sir;
    var nom = req.query.nom;
    var categorie = req.query.categorie;
    
    console.log(num_sir,nom,categorie);

    con.connect(function(err) 
    {
      if (err) throw err;
      con.query("INSERT INTO partenaires VALUES ("+num_sir+", '"+nom+"', '"+categorie+"')", function (err, result) {
      if (err) res.send("erreur");
      res.send("Insertion OK");
    });
    });
});

app.post('/modify', function(req,res){
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE1"
    });

    var num_sir = req.query.num_sir;
    var nom = req.query.nom;
    var categorie = req.query.categorie;
    
    console.log(num_sir,nom,categorie);

    con.connect(function(err) 
    {
      if (err) throw err;
      con.query("UPDATE partenaires SET num_sir="+num_sir+" ,nom= '"+nom+"', categorie= '"+categorie+"' WHERE num_sir= "+num_sir, function (err, result) {
      if (err) res.send("erreur");
      res.send("Update OK");
    });
    });
});

app.post('/testpost', function(req,res){
      res.send("POST OK !");
});


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


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

      
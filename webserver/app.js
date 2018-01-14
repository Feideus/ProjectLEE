//requireing dependencies
var express = require('express');
var path = require('path');
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

app.use(express.static('public'))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Only /data is use as a route, the rest is set directly in this file
app.use('/', index);
app.use('/data', index);
    

// Gets one SIREN number and deletes it from the DB    
app.get('/deletedata', function(req,res){
    //settings for db
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE2"
    });
    
    var num_sir = req.query.num_sir;
    //connection to DB and Querying
    con.connect(function(err) 
    {
      if (err) throw err;
      con.query("DELETE FROM partenaires WHERE num_sir = "+num_sir, function (err, result) {
      if (err) res.send(err);
      res.send("query success");
    });
    });
});

// taking SIREN number, name and category entered as POST arguments and adds a row
// in the DB with these values
app.post('/add', function(req,res){
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE2"
    });

    var num_sir = req.query.num_sir;
    var nom = req.query.nom;
    var categorie = req.query.categorie;


    con.connect(function(err) 
    {
      if (err) throw err;
      con.query("INSERT INTO partenaires VALUES ("+num_sir+", '"+nom+"', '"+categorie+"')", function (err, result) {
      if (err) res.send("erreur");
      res.send("Insertion OK");
    });
    });
});


// taking SIREN number, name and category entered as POST arguments and modifies a row
// in the DB with these values
app.post('/modify', function(req,res){
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE2"
    });
    

    var num_sir = req.query.num_sir;
    var nom = req.query.nom;
    var categorie = req.query.categorie;
        
    con.connect(function(err) 
    {
        if (err) throw err;
        con.query("UPDATE partenaires SET num_sir="+num_sir+" ,nom= '"+nom+"', categorie= '"+categorie+"' WHERE num_sir= "+num_sir, function (err, result) {
        if (err) res.send("erreur");
        res.send("Update OK");
    });
    });
});

// this function calls the database without any arguments.
// It launches a query that groups similar rows together for a better readability
app.get('/optimise', function(req,res){
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE2"
    });
    
    //Doing two queries at once. Grouping up the rows

    con.connect(function(err) 
    {
        if (err) throw err;
        con.query("update partenaires p set p.nom = (select p1.nom from lol1 p1 where p.num_sir=p1.num_sir )", function (err, result) 
        {
            if (err) res.send("erreur");
        });
            // then deleting the NULL values left by the first query
        con.query("delete from partenaires where nom IS NULL", function (err, result) 
        {
            if (err) res.send("erreur");
            res.send("SUCCESS");
        });
    });
});

//used for unit Testing. sends a String response ment to be anylised as such
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

      
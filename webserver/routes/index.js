var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var result;
/* GET home page. */
router.get('/data', function(req, res, next) {
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE2"
    });

    con.connect(function(err) 
    {
      if (err) throw err;
      con.query("select * from partenaires", function (err, result) {
      if (err) throw err;
        res.json(result);
     });
    });
});

router.post('/data', function(req, res, next) {
      var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE1"
    });

    con.connect(function(err) 
    {
      var num_sir = req.params.num_sir;
      var nom = req.params.nom;
      var categorie = req.params.categorie;
      
      if (err) throw err;
      con.query("UPDATE partenaires SET(num_sir = "+num_sir+" , nom = "+nom+", categorie= "+categorie+" WHERE num_sir = "+num_sir+");", function (err, result) {
        console.log("réussite")
        if (err) throw err;
        });
    });
});

router.get('/', function(req, res, next) {
    res.sendFile("/home/feideus/Work/ProjectLEE/webserver"+"/public/html/exemple.html");
});

router.get('/modification', function(req, res, next) {
    res.sendFile("/home/feideus/Work/ProjectLEE/webserver"+"/public/html/modification.html");
});

router.get('/creation', function(req, res, next) {
    res.sendFile("/home/feideus/Work/ProjectLEE/webserver"+"/public/html/creation.html");
});

router.get('/tests', function(req, res, next) {
    res.sendFile("/home/feideus/Work/ProjectLEE/webserver"+"/public/html/tests.html");
});

module.exports = router;

var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "DATABASE1"
    });

    con.connect(function(err) 
    {
      if (err) throw err;
      con.query("select * from partenaires", function (err, result) {
      if (err) throw err;
      for (var i = 0; i < result.length; i++) 
      {
        var row = result[i];
        console.log(row.num_sir);
        console.log(row.nom);
        console.log(row.categorie);
      }
      res.send("query success");
    });
    });
    
    
});

module.exports = router;

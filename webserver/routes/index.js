var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("type local.test:3000/html/exemple.html to access main page please");
});

module.exports = router;

// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 7001;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.delete('/', function(req, res) {
    res.json({ message: 'there is nothing you can delete' });   
});

router.put('/', function(req, res) {
    res.json({ message: 'there is nothing you can put' });   
});

router.post('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/tree', function(req, res) 
{
   console.log(req.query.path);
   res.send(JSON.stringify("requête traitée avec succès"));
});

router.post('/tree', function(req, res) 
{
    console.log(req.query.path);
    res.send(JSON.stringify("requête traitée avec succès"));
});


router.get('/evenNumbers', function(req, res) {
    var max = 20;
    var resultat=[];
    var x = 0;
    while(x !== max)
    {
        if(x%2 === 0)
            resultat.push(x);
        x++;
    }
    console.log(resultat);
    res.end('resultat : '+resultat)
});

router.post('/evenNumbers', function(req, res) {
    var max = 20;
    var resultat=[];
    var x = 0;
    while(x !== max)
    {
        if(x%2 === 0)
            resultat.push(x);
        x++;
    }
    console.log(resultat);
    res.end('resultat : '+resultat)
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


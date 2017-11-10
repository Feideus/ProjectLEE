var axios = require('axios');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

  function getDirectories(path, callback) 
  {
        fs.readdir(path, function (err, content) 
        {
            if (err) return callback(err);
            callback(null, content);
        });
}

var content2;

function calcul_arbo()
{
       var p = document.getElementById("path").value;
       console.log(p);
       var strings;
       
        getDirectories(p, function (err, content) {
            console.log(content);
            content2 = content;
        });
        
}

function callAPI(tableauDeDossier)
{
    axios.get('http://local.test/tree'+"?path="+tableauDeDossier).then(function (response)
    {
        document.getElementById("APIText").innerHTML = JSON.stringify(response.data);
    })
  .catch(function (error) {
      document.getElementById("APIText").innerHTML = error.toString();
  });
}

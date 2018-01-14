/* eslint no-unused-vars: "off"*/
/* eslint no-undef: "off"*/


//filling the whole partnership <table> from data fetched rom database
function fillPartnershipGrid(infosPartenarias)
{
   var x = 0;
   var tbody = document.getElementById('tbody');
   for(x = 0; x<infosPartenarias.length;x++)
   {
            var tr = "<tr class='success'>";
            tr+="<td class='text-active'>"+infosPartenarias[x].num_sir+"</td>"+"<td class='text-active'>"+infosPartenarias[x].nom+"</td>"+"<td class='text-active'>"+infosPartenarias[x].categorie+"</td></tr>";


            tbody.innerHTML += tr;
   }
}

// function calling the /optimise function of app.js
function optimiserFiches()
{
    res = httpGet("http://local.test:3000/optimise");
    window.location.href='exemple.html'
}

//filling specific fields on the page with the data fetched from a single row in the database

function fillThisPartnership(infosPartenarias)
{
    var idPartnership = parseInt($_GET('num_sir'),10);
    var lePartnership;
    var i;
    
    for(i=0; i<infosPartenarias.length;i++)
    {
        if(parseInt(infosPartenarias[i].num_sir,10) === idPartnership)
        {
            lePartnership =  infosPartenarias[i];
            
        }
    }
    document.getElementById("num_sir").value = lePartnership.num_sir;
    document.getElementById("nom").value = lePartnership.nom;
    document.getElementById("categorie").value = lePartnership.categorie;
}

// function used to get GET parameters passed through URL
function $_GET(param) 
{
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace( 
    /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
    function( m, key, value ) { // callback
	vars[key] = value !== undefined ? value : '';
    });
    if (param) {
	return vars[param] ? vars[param] : null;	
    }
    return vars;
}

function validerCreationPartenaria()
{
    var nouvelId = 0;
    var nouveauNom = "";
    var nouveauType = "";
    
    nouvelId = document.getElementById("num_sir").value
    nouveauNom = document.getElementById("nom").value;
    nouveauType = document.getElementById("categorie").value;
    
    httpPost("http://local.test:3000/add?num_sir="+nouvelId+"&nom="+nouveauNom+"&categorie="+nouveauType);
}

function supprimerParternaria(num_sir)
{  
    httpGet("http://local.test:3000/deletedata?num_sir="+num_sir);
}

function validerModificationPartnership()
{
    var nouvelId = 0;
    var nouveauNom = "";
    var nouveauType = "";
    
        nouvelId = document.getElementById("num_sir").value
    nouveauNom = document.getElementById("nom").value;
    nouveauType = document.getElementById("categorie").value;

    httpPost("http://local.test:3000/modify?num_sir="+nouvelId+"&nom="+nouveauNom+"&categorie="+nouveauType);
}


function getGoodUrl(page)
{
    var url;
    var arg;
    if (page === "modification")
    {
        arg = detecNumSir("num_sir_update");
        url = "modification.html?num_sir="+arg;
    }
    else
    {
        return "erreur";
    }
    
    return url;
}

function detecNumSir(iddiv)
{
    return document.getElementById(iddiv).value;
}

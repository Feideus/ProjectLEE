

function fillPartnershipGrid(infosPartenarias)
{
   console.log(infosPartenarias[0]);
   var x = 0;
   var tbody = document.getElementById('tbody');
   for(x = 0; x<infosPartenarias.length;x++)
   {
            console.log(infosPartenarias[x].num_sir);
            var tr = "<tr>";
            tr+="<td>"+infosPartenarias[x].num_sir+"</td>"+"<td>"+infosPartenarias[x].nom+"</td>"+"<td>"+infosPartenarias[x].categorie+"</td></tr>";


            tbody.innerHTML += tr;
   }
}

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
    document.getElementById("textId").innerHTML = lePartnership.num_sir;
    document.getElementById("textNom").innerHTML = lePartnership.nom;
    document.getElementById("textType").innerHTML = lePartnership.categorie;
}

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
    
    nouvelId = document.getElementById("textId").value;
    nouveauNom = document.getElementById("textNom").value;
    nouveauType = document.getElementById("textType").value;
    
    httpPost("http://local.test:3000/add?num_sir="+nouvelId+"&nom="+nouveauNom+"&categorie="+nouveauType);
}

function supprimerParternaria(num_sir)
{   
    console.log(num_sir);
    httpGet("http://local.test:3000/deletedata?num_sir="+num_sir);
}

function validerModificationPartnership()
{
    var nouvelId = 0;
    var nouveauNom = "";
    var nouveauType = "";

    if(nouvelId !== 0 || nouveauNom !== "" || nouveauType !== "")
    {
        httpGetAsync("local.test/responseApi?id="+nouvelId+"&nom="+nouveauNom+"&type="+nouveauType);
    }
    else
    {
        alert("Les données entrées sont incorrectes");
    }
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





console.log("core script ready!");

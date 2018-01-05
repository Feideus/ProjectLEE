var infosPartenarias = [{Id:1,Nom:"Test",Type:"commercial"}]; // liste de liste id,nom,type,date

function fillPartnershipGrid()
{
    //appel à l'api, initialisation de infosPartenarias et remplissage du <tr>
}

function fillThisPartnership()
{
    alert("coucou");
    var idPartnership = $_GET('id');
    alert(idPartnership);
    var lePartnership = infosPartenarias.pop(idPartnership);
    
    document.getElementById("textId").innerHTML = lePartnership.Id;
    document.getElementById("textNom").innerHTML = lePartnership.Nom;
    document.getElementById("textType").innerHTML = lePartnership.Type;
    
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

function validerChangementsPartenaria()
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


var infosPartenarias = [{}] // liste de liste id,nom,type,date

function fillPartnershipGrid()
{
    //appel à l'api, initialisation de infosPartenarias et remplissage du <tr>
}

function fillThisPartnership()
{
    var idPartnership = $_GET('id');
    var lePartnership = infosPartenarias.pop(idPartnership);
    //affichage du partenaria dans le <tr>
    
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
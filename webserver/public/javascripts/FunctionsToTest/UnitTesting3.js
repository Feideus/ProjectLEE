var xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new xmlhttprequest();


function httpPost(theUrl)
{
    xhr.open( "POST", theUrl, false ); // false for synchronous request
    xhr.send( null );
    return xhr.responseText;
}


module.exports = 
{
    httpPost
}
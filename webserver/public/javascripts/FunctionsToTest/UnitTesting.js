

var xmlhttprequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new xmlhttprequest();

function getGoodUrl(page)
{
    var url = "#";
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

module.exports = 
{
    getGoodUrl
}

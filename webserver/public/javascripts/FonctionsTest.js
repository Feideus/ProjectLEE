function checkDataIntegrity(Partnerships){
    var integre = true;
    if(typeof Partnerships !== 'undefined' && Partnerships.length > 0 === "")
    {
        integre:false;
    }
    for(var i in Partnerships)
    {
        for(var j in Partnerships)
        {
            if(Partnerships[i].num_sir === Partnerships[j].num_sir)
            {
                integre = false;
            }
        }
    }
    return integre;
}

console.log("script test ready!");



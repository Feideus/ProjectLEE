'use strict';

function generateEvenNumbers(max) {
    var res = [];
    var x = 0;
    while(x !==max)
    {
        if(x%2 === 0)
            res.push(x);
        
        x++;
    }
    return res;
}

module.exports = {
    generateEvenNumbers
};
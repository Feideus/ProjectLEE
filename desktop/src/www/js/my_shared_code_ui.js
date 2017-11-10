'use strict';

var my_shared_code_headless = require('../js/my_shared_code_headless.js');

function writeContent() {
    var numbers = my_shared_code_headless.generateEvenNumbers(40);
    document.getElementById("APIText").innerHTML = JSON.stringify(numbers);
}

console.log("script ready");

module.exports = {
    writeContent
};

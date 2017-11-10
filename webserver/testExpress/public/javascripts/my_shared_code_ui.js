'use strict';

var my_shared_code_headless = require('./my_shared_code_headless');

function writeContent() {
    var numbers = my_shared_code_headless.generateEvenNumbers(40);
    return numbers;
}

console.log("script ready");

module.exports = {
    writeContent
};


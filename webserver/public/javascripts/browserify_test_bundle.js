(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function sleep(ms) 
{
  var r;
  return new Promise(r => setTimeout(r, ms));
}

/*function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}*/

var my_shared_code_ui = require('./public/javascripts/my_shared_code_ui.js');
var body_elem = document.getElementById('exemple');
var x = 0;
var numbers = my_shared_code_ui.writeContent();

numbers.forEach(function()
                            {
                                alert(numbers[x]);
                                x++;
                                sleep(2000);
                            });



},{"./public/javascripts/my_shared_code_ui.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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


},{"./my_shared_code_headless":2}]},{},[1]);

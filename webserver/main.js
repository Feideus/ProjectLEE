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



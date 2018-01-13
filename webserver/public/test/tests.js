var assert = require('assert');
var CF = require('../javascripts/FunctionsToTest/UnitTesting');
var CF2 = require('../javascripts/FunctionsToTest/UnitTesting2');
var CF3 = require('../javascripts/FunctionsToTest/UnitTesting3');


describe('Testing format of api', function() {
    it('Should return String', function() {
      assert.equal(typeof(CF.getGoodUrl()),"string");
  });
});

describe('Trying to resolve Data ', function() {
    it('Should return String', function() {
      assert.equal(typeof(CF2.httpGet("http://local.test:3000/data")),"string");
  });
});

describe('Testing modification Method', function() {
    it('Should return String', function() {
      assert.equal(typeof(CF3.httpPost("http://local.test:3000/testpost")),"string");
  });
});
var assert = require('assert');
var run = require('./run');

describe('powerof- app', function(){
    it('', function(){
        var output = run(['add-one.js', '3']);
        assert.equal(output, '27');
    })
});




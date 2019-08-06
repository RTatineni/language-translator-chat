
/* Basic Mocha Test*/

var assert = require('assert');
describe('Math', function() {
    it('should test if 3*3 = 9', function(){
      assert.equal(9, 3*3);
    });
    it('should test if (3-4)*8 = -8', function(){
      assert.equal(-8, (3-4)*8);
    });
});

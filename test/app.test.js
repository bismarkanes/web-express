const chai = require('chai');
const expect = chai.expect;

describe('app', function() {
  it('should be app', function(done) {
    expect('a' + 'p' + 'p').to.be.equal('app');
    done();
  });
});

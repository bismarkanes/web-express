const chai = require('chai');
const expect = chai.expect;

describe('server', function() {
  it('should be server', function(done) {
    expect('s' + 'e' + 'r' + 'v' + 'e' + 'r').to.be.equal('server');
    done();
  });
});

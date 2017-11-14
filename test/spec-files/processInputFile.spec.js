const { expect } = require('chai');
const processInputFile = require('../../utils/processInputFile');
const path = require('path');

describe('processInputFile', () => {
  it('can correctly process the given sample input ("sample-input-1.txt")', (done) => {
    const testFilePath = path.join(__dirname, '../test-input-files/sample-input-1.txt');
    processInputFile(testFilePath, ((n, k, range) => {
      expect(5).to.equal(n);
      expect(3).to.equal(k);
      expect(range).to.eql([188930, 194123, 201345, 154243, 154243]);
      done();
    }));
  });
  it('can correctly process another sample input ("sample-input-4.txt")', (done) => {
    const testFilePath = path.join(__dirname, '../test-input-files/sample-input-4.txt');
    processInputFile(testFilePath, ((n, k, range) => {
      expect(5).to.equal(n);
      expect(2).to.equal(k);
      expect(range).to.eql([21, 20, 22, 22, 34]);
      done();
    }));
  });
});

const { expect } = require('chai');
const mainTest = require('../main-test-function.js');
const path = require('path');

describe('main', () => {
  it('can correctly process the given sample input ("sample-input-1.txt")', (done) => {
    const testFilePath = path.join(__dirname, '../test-input-files/sample-input-1.txt');
    const expected = [3, 0, -1];
    mainTest(testFilePath, ((windowCounts) => {
      expect(expected).to.eql(windowCounts);
      done();
    }));
  });
  it('can correctly process an input with tied averages ("sample-input-2.txt")', (done) => {
    const testFilePath = path.join(__dirname, '../test-input-files/sample-input-2.txt');
    const expected = [1, 3, 3];
    mainTest(testFilePath, ((windowCounts) => {
      expect(expected).to.eql(windowCounts);
      done();
    }));
  });
  it('can correctly process a large sample input (n = 200k) within the time constraints (10s) ("sample-input-5.txt")', (done) => {
    const testFilePath = path.join(__dirname, '../test-input-files/sample-input-5.txt');
    const startTime = Date.now();
    mainTest(testFilePath, (() => {
      const timeElapsed = Date.now() - startTime;
      expect(timeElapsed < 100001).to.equal(true);
      done();
    }));
  });
});
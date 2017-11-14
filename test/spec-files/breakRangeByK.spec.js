const { expect } = require('chai');
const breakRangeByK = require('../../utils/breakRangeByK');

describe('breakRangeByK', () => {
  it('can correctly convert a given range array to an array of windows', () => {
    const range = [19, 20, 22, 21, 23];
    const n = range.length;
    const k = 2;
    const expected = [[19, 20], [20, 22], [22, 21], [21, 23]];
    expect(expected).to.eql(breakRangeByK(n, k, range));
  });
  it('can correctly convert a given range array given an n value equal to the given k value', () => {
    const range = [19, 20, 22, 21, 23];
    const n = range.length;
    const k = n;
    const expected = [range.slice(0)];
    expect(expected).to.eql(breakRangeByK(n, k, range));
  });
});

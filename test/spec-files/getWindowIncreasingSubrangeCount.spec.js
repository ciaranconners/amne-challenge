const { expect } = require('chai');
const getWindowIncreasingSubrangeCount = require('../../utils/getWindowIncreasingSubrangeCount');

describe('getWindowIncreasingSubrangeCount', () => {
  it('can correctly calculate the count for a given window', () => {
    const window1 = [19, 20, 22, 21, 23];
    expect(getWindowIncreasingSubrangeCount(window1)).to.equal(3);
    const window2 = [20, 21, 15, 14, 1, 6, 6];
    expect(getWindowIncreasingSubrangeCount(window2)).to.equal(-2);
  });
});

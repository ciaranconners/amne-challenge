const processInputFile = require('../utils/processInputFile');
const breakRangeByK = require('../utils/breakRangeByK');
const getWindowIncreasingSubrangeCount = require('../utils/getWindowIncreasingSubrangeCount');

// a test version of the main function, which doesn't log but instead returns an array for easier comparison with expected vals
// this version takes a callback which receives the complete array when the forEach loop completes

const mainTest = (inputFilePath, callback) => {
  const windowCounts = [];
  processInputFile(inputFilePath, (n, k, range) => {
    const windows = breakRangeByK(k, range);
    windows.forEach((window) => {
      const windowCount = getWindowIncreasingSubrangeCount(window);
      console.log(windowCount);
      windowCounts.push(windowCount);
    });
    callback(windowCounts);
  });
};

module.exports = mainTest;
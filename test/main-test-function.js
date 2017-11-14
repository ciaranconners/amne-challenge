const processInputFile = require('../utils/processInputFile');
const breakRangeByK = require('../utils/breakRangeByK');
const getWindowIncreasingSubrangeCount = require('../utils/getWindowIncreasingSubrangeCount');

/* a test version of the main function, which returns an array for easier comparison
with expected results; this version takes a callback which receives
the complete array when the forEach loop completes */

const mainTest = (inputFilePath, callback) => {
  const windowCounts = [];
  processInputFile(inputFilePath, (n, k, range) => {
    const windows = breakRangeByK(n, k, range);
    windows.forEach((window) => {
      const windowCount = getWindowIncreasingSubrangeCount(window);
      console.log(windowCount);
      windowCounts.push(windowCount);
    });
    callback(windowCounts);
  });
};

module.exports = mainTest;

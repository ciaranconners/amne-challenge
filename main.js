const processInputFile = require('./utils/processInputFile');
const breakRangeByK = require('./utils/breakRangeByK');
const getWindowIncreasingSubrangeCount = require('./utils/getWindowIncreasingSubrangeCount');

const main = (inputFilePath) => {
  processInputFile(inputFilePath, (n, k, range) => {
    const windows = breakRangeByK(k, range);
    windows.forEach((window) => {
      const windowCount = getWindowIncreasingSubrangeCount(window);
      windowCounts.push(windowCount);
      console.log(windowCount);
    });
  });
};

module.exports = main;

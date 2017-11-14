const processInputFile = require('./utils/processInputFile');
const breakRangeByK = require('./utils/breakRangeByK');
const getWindowIncreasingSubrangeCount = require('./utils/getWindowIncreasingSubrangeCount');

const inputPath = process.argv[2];

/**
* @param {string} filePath
*/

const main = (filePath) => {
  processInputFile(filePath, (n, k, range) => {
    const windows = breakRangeByK(n, k, range);
    windows.forEach((window) => {
      const windowCount = getWindowIncreasingSubrangeCount(window);
      console.log(windowCount);
    });
  });
};

main(inputPath);

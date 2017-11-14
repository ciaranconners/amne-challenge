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

// O(n * c * k) where c = number of ranges k


// [3:58]
// so basically O(n*k) is my thought


// [4:00]
// I think best case is no overlap, so k = n, so O(n*k) === O(n^2)


// [4:02]
// if there is overlap, you introduce a constant, c, and you have O(n*c*k)
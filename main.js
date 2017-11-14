const processInputFile = require('./utils/processInputFile');
const breakRangeByK = require('./utils/breakRangeByK');
const getWindowIncreasingSubrangeCount = require('./utils/getWindowIncreasingSubrangeCount');

/* to run this program, enter node main.js ${requiredFilePath} from the project's root: */
const inputPath = process.argv[2];

const main = (filePath) => {
  processInputFile(filePath, (n, k, range) => {
    const windows = breakRangeByK(n, k, range);
    windows.forEach((window) => {
      const windowCount = getWindowIncreasingSubrangeCount(window);
      console.log(windowCount);
    });
  });
};

// the main function runs, taking the given path as its input:
main(inputPath);

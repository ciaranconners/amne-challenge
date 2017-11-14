To run this project against an input file run `node main.js ${desiredFilePath}` from the project's root.

I have included a test suite, which you can run via npm test. In order to install mocha and chai, which are required for testing, run npm install from the project's root.

In the test directory, in the test-utils folder, you will find a module called generateTestInputFile.js. This module will generate a test input file for a given n and k value. To create a test input file at a desiredFilePath, from the test-utils folder run `node generateTestInputFile.js ${n} ${k} ${minimumValueRangeShouldContain} ${maximumValueRangeShouldContain} ${desiredFilePath}`. These minimum and maximum values will be inclusive.

My solution is modularized. The main function calls on utility functions (processInputFile, breakRangeByK, getWindowIncreasingSubrangeCount) to read in and process a given input. The file is read in and the range is converted to an array. breakRangeByK converts this array to an array of k-length windows. getWindowIncreasingSubrangeCount is called for each window in the resulting array of windows, and the result of this function call is logged to the console by main.

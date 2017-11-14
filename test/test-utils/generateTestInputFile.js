const fs = require('fs');
const getRandomInclusive = require('./getRandomIntInclusive');

const n = parseInt(process.argv[2], 10);
const k = parseInt(process.argv[3], 10);
const filePathToWrite = process.argv[4];

/**
* @param {string} filePath
*/

const generateTestInputFile = (filePath) => {
  const toWrite = [];
  for (let i = 0; i < n; i++) {
    toWrite.push(getRandomInclusive(1, 100000)); // push a random number to the array between
  }
  fs.writeFile(filePath, `${n} ${k}\n${toWrite.join(' ')}`, (err) => {
    if (err) {
      throw err;
    }
    console.log('sucess! ', filePath, 'written succesfully');
  });
};

generateTestInputFile(filePathToWrite);

const fs = require('fs');
const getRandomInclusive = require('./getRandomIntInclusive');

const n = parseInt(process.argv[2], 10);
const k = parseInt(process.argv[3], 10);
const minimumValue = parseInt(process.argv[4], 10);
const maximumValue = parseInt(process.argv[5], 10);
const filePathToWrite = process.argv[6];

/**
* @param {string} filePath
*/

const generateTestInputFile = (filePath, min, max) => {
  const toWrite = [];
  for (let i = 0; i < n; i++) {
    toWrite.push(getRandomInclusive(min, max));
  }
  fs.writeFile(filePath, `${n} ${k}\n${toWrite.join(' ')}`, (err) => {
    if (err) {
      throw err;
    }
    console.log('sucess! ', filePath, 'written succesfully');
  });
};

generateTestInputFile(filePathToWrite, minimumValue, maximumValue);

const fs = require('fs');
const getRandomInclusive = require('./getRandomIntInclusive');

const n = parseInt(process.argv[2], 10);
const k = parseInt(process.argv[3], 10);

const toWrite = [];

for (let i = 0; i < n; i++) {
  toWrite.push(getRandomInclusive(1, 50)); // push a random number to the array between
}

const filePathToWrite = process.argv[4];

fs.writeFile(filePathToWrite, `${n} ${k}\n${toWrite.join(' ')}`, (err) => {
  if (err) {
    throw err;
  }
  console.log('sucess! ', filePathToWrite, 'written succesfully');
});

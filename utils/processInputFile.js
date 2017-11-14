const fs = require('fs');

/**
* @param {string} filePath
* @param {function} callback
*/

const processInputFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const input = data.split('\n');
    const nAndK = input[0].split(' ');
    const n = parseInt(nAndK[0], 10);
    const k = parseInt(nAndK[1], 10);
    const range = input[1].split(' ').map(el => parseInt(el, 10));
    callback(n, k, range);
  });
};

module.exports = processInputFile;

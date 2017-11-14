const fs = require('fs');

const processInputFile = (filepath, callback) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
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

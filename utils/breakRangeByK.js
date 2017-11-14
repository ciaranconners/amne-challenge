/**
* @param {number} n
* @param {number} k
* @param {array} range
* @returns {array} an array of k-length windows
*/

const breakRangeByK = (n, k, range) => {
  const windows = [];
  let currentWindow = [];
  for (let i = 0; i <= n; i++) {
    if (currentWindow.length === k) {
      windows.push(currentWindow);
      currentWindow = currentWindow.slice(1);
    }
    currentWindow.push(range[i]);
  }
  return windows;
};

module.exports = breakRangeByK;

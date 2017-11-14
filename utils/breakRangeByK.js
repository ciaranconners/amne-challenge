/* a utility function to break a given range of values into k-sized windows
(O(n) time complexity) */

// n = number
// k = number
// range = array
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

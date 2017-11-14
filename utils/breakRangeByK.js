const breakRangeByK = (k, range) => {
  const windows = [];
  let currentWindow = [];
  for (let i = 0; i <= range.length; i++) {
    if (currentWindow.length === k) {
      windows.push(currentWindow);
      currentWindow = currentWindow.slice(1);
    }
    currentWindow.push(range[i]);
  }
  return windows;
};

module.exports = breakRangeByK;

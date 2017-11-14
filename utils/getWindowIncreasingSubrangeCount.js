/**
* @param {array} window
* @returns {number} The increasing subrange count - the decreasing subrange count for a given window
*/

const getWindowIncreasingSubrangeCount = (window) => {
  let count = 0;
  let currentRangeLength = 0;
  let isDescending = window[0] > window[1];
  if (window[0] === window[1]) {
    isDescending = -1;
  }
  for (let i = 0; i <= window.length; i++) {
    const currentAverage = window[i];
    const nextAverage = window[i + 1];
    if (isDescending === true) {
      if (currentAverage > nextAverage) {
        count--;
        currentRangeLength++;
      } else if (currentAverage < nextAverage) {
        isDescending = false;
        count++;
        if (currentRangeLength > 1) {
          count--;
        }
        currentRangeLength = 1;
      } else if (currentAverage === nextAverage) {
        isDescending = -1;
        if (currentRangeLength > 1) {
          count--;
        }
        currentRangeLength = 0;
      }
    } else if (isDescending === false) {
      if (currentAverage < nextAverage) {
        count++;
        currentRangeLength++;
      } else if (currentAverage > nextAverage) {
        isDescending = true;
        count--;
        if (currentRangeLength > 1) {
          count++;
        }
        currentRangeLength = 1;
      } else if (currentAverage === nextAverage) {
        isDescending = -1;
        if (currentRangeLength > 1) {
          count++;
        }
        currentRangeLength = 0;
      }
    } else if (isDescending === -1) {
      if (currentAverage < nextAverage) {
        isDescending = false;
        count++;
      } else if (currentAverage > nextAverage) {
        isDescending = true;
        count--;
      }
    }
  }
  return count;
};

module.exports = getWindowIncreasingSubrangeCount;

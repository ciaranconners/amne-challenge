const getWindowIncreasingSubrangeCount = (window) => {
    let count = 0;
    let currentRangeLength = 0;
    let isDescending = window[0] > window[1];
    if (window[0] === window[1]) {
        isDescending = -1;
    }
    for (let i = 0; i <= window.length; i++) {
        const currentAverage = window[i], nextAverage = window[i + 1];

        if (isDescending === true) {
            if (currentAverage > nextAverage) {
                count--;
                // console.log('inside isDescending block: ', window, count, currentAverage, nextAverage);
                currentRangeLength++;
            } else if (currentAverage < nextAverage) {
                // console.log('switch to ascent');
                isDescending = false;
                count++;
                // console.log('inside isDescending switch to ascent block: ', window, count, currentAverage, nextAverage, isDescending);
                if (currentRangeLength > 1) {
                    count--;
                }
                currentRangeLength = 1;
            } else if (currentAverage === nextAverage) {
                // console.log('inside isDescending switch to neutral block: ', window, count, currentAverage, nextAverage);
                isDescending = -1;
                if (currentRangeLength > 1) {
                    count--;
                }
                currentRangeLength = 0;
            }
        } else if (isDescending === false) {
            if (currentAverage < nextAverage) {
                count++;
                // console.log('inside !isDescending block: ', window, count, currentAverage, nextAverage);
                currentRangeLength++;
            } else if (currentAverage > nextAverage) {

                // console.log('switch to descent');
                isDescending = true;
                count--;
                // console.log('inside !isDescending block switch to descent block: ', window, count, currentAverage, nextAverage);
                if (currentRangeLength > 1) {
                    count++;
                }
                currentRangeLength = 1;
            } else if (currentAverage === nextAverage) {
                // console.log('inside !isDescending switch to neutral block: ', window, count, currentAverage, nextAverage, i);
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
// keep track of:
  // sequence length
  // whether or not sequence isDescending (bool)

  // each iteration sequence does not change:
    // add or subtract per isDescending

  // when the sequence changes per isDescending:
    // if sequence length > 1, we add or subtract another 1 for the sequence as a whole

module.exports = getWindowIncreasingSubrangeCount;

const arr = [-1, 1, 0, 3, 2, 0, -1, 7, 5, 4, -10];
/**
 * return the longest sub-array of positive for a given array
 * @param{number[]} array
 * @returns{number[]}
 */
const longestSubArrayPossitive = (array) => {
  let positiveCount = 0;
  let maxCount = 0;
  let currentPositives = [];
  let maxCurruntPositives = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveCount += 1;
      currentPositives.push(array[i]);
      if (positiveCount > maxCount) {
        maxCount = positiveCount;
        maxCurruntPositives = currentPositives;
      }
    } else {
      positiveCount = 0;
      currentPositives = [];
    }
    // console.log(i, array[i], positiveCount, maxCount, currentPositives, maxCurruntPositives);
  }

  return maxCurruntPositives;
};
console.log(longestSubArrayPossitive(arr));

const arr = [-1, 1, 0, 1, 2, 0, -1, 1, 2, 3, -10];
/**
 * return the longest sub-array of positive for a given array
 *@param{number[]} arr
 */
const longestSubArrayPossitive = (array) => {
  let positiveCount = 0;
  let maxCount = 0;
  let arrayOfPositiveNumbers_key = [];
  let emptyArrforI = [];
  let subArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveCount += 1;
      if (positiveCount > 0) {
        maxCount = positiveCount;
        arrayOfPositiveNumbers_key.push(array[i]);
        maxCount;
      }
    } else {
      positiveCount = 0;
    }
  }
  let indexOf_i = arrayOfPositiveNumbers_key.indexOf(1);
  while (indexOf_i != -1) {
    emptyArrforI.push(indexOf_i);
    indexOf_i = arrayOfPositiveNumbers_key.indexOf(1, indexOf_i + 1);
  }

  for (let i = 0; i < arrayOfPositiveNumbers_key.length / 2; i++) {
    subArray[i] = arrayOfPositiveNumbers_key.slice(
      emptyArrforI[i],
      emptyArrforI[i + 1]
    );
  }
  let compareSubArray = subArray.filter((el) => el.length === maxCount);
  const finalArr = compareSubArray.reduce((acc, cur) => [...acc, ...cur]);
  return finalArr;
};
console.log(longestSubArrayPossitive(arr));
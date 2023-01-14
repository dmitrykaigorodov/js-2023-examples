const arr = [0, -1, 1, 2, 3, -10]

// Задание 1: найти минимальную длину цепочки. Например [0, -1, 1, 2, 3, -10] => 3
// Задание 2: вывести сам массив максимальной длины. Например [1, 0, -1, 1, 2, 6, -10] => [1, 2, 6]

/**
 * Returns the length of the longest sub-array of positives for a given array
 * @param {number[]} arr 
 */
const longestSubArrayOfPositives = (arr) => {
  let positiveCount = 0
  let maxCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
      if (maxCount < positiveCount) {
        maxCount = positiveCount
      }
    } else {
      positiveCount = 0
    }
    // console.log(i, positiveCount, maxCount)
  }
  return maxCount
}

console.log(longestSubArrayOfPositives(arr))
// longestSubArrayOfPositives()

// #2. найти число которое встречается не реже остальных в массиве


const findFrequent = (array) => {
  const frequency = new Map()
  for (const number of array) {
    if (frequency.get(number)) {
      frequency.set(number, frequency.get(number) + 1)
    } else {
      frequency.set(number, 1)
    }
  }
  console.log(frequency)


  let max = -Infinity
  let values = []
  frequency.forEach((times, number) => {
    if (max == times) {
      values.push(number)
    }
    if (max < times) {
      max = times
      values = [number]
    }
  })
  return values
}

console.log(findFrequent([3, 2, 1, 5, 1, 3, 0]))

// const testFindMax = (array, expected) => {
//   const actual = findMax(array)
//   if (actual === expected) {
//     console.log('\x1b[36m%s\x1b[0m', "PASS", array)
//   } else {
//     console.log('\x1b[31m', "FAIL", array, actual, expected)
//   }
// }

// testFindMax([1, 2, 2], 2)
// testFindMax([1, 1], 1)
// testFindMax([1], 1)
// testFindMax([-1], -1)
// testFindMax([], null)



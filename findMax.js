// #1. найти число которое не меньше остальных в массиве
// #2. найти число которое встречается не реже остальных в массиве


const findMax = (array) => {
  if (!array || !array.length) {
    return null;
  }
  let max = -Infinity
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i]
    }
  }
  return max;
}

const testFindMax = (array, expected) => {
  const actual = findMax(array)
  if (actual === expected) {
    console.log('\x1b[36m%s\x1b[0m', "PASS", array)
  } else {
    console.log('\x1b[31m', "FAIL", array, actual, expected)
  }
}

testFindMax([1, 2, 2], 2)
testFindMax([1, 1], 1)
testFindMax([1], 1)
testFindMax([-1], -1)
testFindMax([], null)


const print = (text) => {
  console.log('null == undefined', null == undefined)
  console.log('null === undefined', null === undefined)
}
print(null)
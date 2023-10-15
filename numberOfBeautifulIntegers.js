
const isBeautiful = (num) => {
  const bytes = new TextEncoder().encode('' + num)
  let even = 0, odd = 0
  for (const byte of bytes) {
    if (byte % 2) {
      even++
    } else {
      odd++
    }
  }
  // console.log({even, odd, bytes, num})
  return even == odd
}
/**
 * @param {number} low
 * @param {number} high
 * @param {number} k
 * @return {number}
 */
var numberOfBeautifulIntegersNaive = function (low, high, k) {
  let num = (Math.floor((low - 1) / k) + 1) * k
  let retVal = 0
  while (num <= high) {
    if (isBeautiful(num)) {
      retVal++
    }
    // console.log(num)
    num += k
  }
  return retVal
};

var numberOfBeautifulIntegers = function (low, high, k) {
}
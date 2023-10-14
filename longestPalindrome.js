// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // leetcode has bugs in test cases
  // if ('aacabdkacaa' == s) {
  //   return 'aca'
  // }
  // if ('bacabab' == s) {
  //   return 'bacab'
  // }

  const N = s.length
  const letters = Array.from(s)
  const cache = new Array(N)

  cache[0] = new Array(N)
  cache[0][0] = letters[0]

  const getCache = (from, to) => {
    if (from == to) {
      return letters[from]
    }
    if (from > to) {
      return ''
    }
    return cache[to][from]
  }

  let max = 0;
  let maxStr = ''


  for (let toIndex = 1; toIndex < N; toIndex++) {
    cache[toIndex] = new Array(N)
    cache[toIndex][toIndex] = letters[toIndex]
    for (let fromIndex = toIndex - 1; fromIndex >= 0; fromIndex--) {
      // console.log('-------')
      let value
      if (letters[fromIndex] == letters[toIndex]) {
        const internal = getCache(fromIndex + 1, toIndex - 1)
        if (internal == '' && fromIndex + 1 < toIndex) {
          value = letters[fromIndex] + letters[fromIndex + 1] + letters[fromIndex]
        } else {
          value = letters[fromIndex] + getCache(fromIndex + 1, toIndex - 1) + letters[fromIndex]
        }
      } else {
        const cache1 = getCache(fromIndex, toIndex - 1)
        const cache2 = getCache(fromIndex + 1, toIndex)
        // console.log(cache1, cache2)
        value = (cache1.length > cache2.length) ? cache1 : cache2
      }
      // console.log(fromIndex, toIndex, s.substring(fromIndex, toIndex + 1), '=>', value)
      cache[toIndex][fromIndex] = value
    }
  }
  // console.log(cache)
  return cache[N - 1][0]
};

/**
 * 
 * @param {string} input 
 * @param {string} expected
 */
const test = (input, expected) => {
  const actual = longestPalindrome(input)
  if (actual == expected) {
    console.log("-- PASS ", actual)
  } else {
    if (expected.length == actual.length) {
      console.log("-- OTHE ", expected, actual)
    } else {
      console.log("XX FAIL ", expected, actual)
    }
  }
}

test('abc', 'a')
test('aba', 'aba')
test('a', 'a')
test('ab', 'a')
test('aacabdkacaa', 'aacakacaa')
test('artxxtrbddba', 'artxxtra')
test('abddbrtaxxtra', 'artxxtra')
test('artxxtrabddba', 'artxxtra')
test('artxxtrrbddba', 'artxxtra')
test('artxxtrbbddba', 'artxxtra')
test('artxxtrdbddba', 'artxxtra')
test('artxxtrdbddba', 'artxxtra')
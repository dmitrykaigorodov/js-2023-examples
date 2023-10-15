// https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  const N = s.length
  const dp = new Array(N)

  dp[0] = new Array(1)
  dp[0][0] = 0
  const getDp = (fromIndex, toIndex) => {
    return fromIndex <= toIndex && fromIndex >= 0 && toIndex < N ?
      dp[toIndex][fromIndex] : 0
  }

  for (let toIndex = 1; toIndex < N; toIndex++) {
    dp[toIndex] = new Array(toIndex + 1)
    dp[toIndex][toIndex] = 0
    for (let fromIndex = toIndex - 1; fromIndex >= 0; fromIndex--) {
      // console.log('------ ', s.substring(fromIndex, toIndex + 1))
      if (s[fromIndex] == s[toIndex]) {
        dp[toIndex][fromIndex] = getDp(fromIndex + 1, toIndex - 1)
        // console.log('match', s.substring(fromIndex, toIndex + 1), '=>', s.substring(fromIndex + 1, toIndex), dp[toIndex][fromIndex])
      } else {
        const left = getDp(fromIndex, toIndex - 1)
        const right = getDp(fromIndex + 1, toIndex)
        if (left < right) {
          dp[toIndex][fromIndex] = left + 1
          // console.log('_left', s.substring(fromIndex, toIndex), fromIndex, '-', toIndex, left + 1)
        } else {
          dp[toIndex][fromIndex] = right + 1
          // console.log('right', s.substring(fromIndex + 1, toIndex + 1), right + 1)
        }
      }
    }
  }
  // console.log(dp)
  return dp[N - 1][0]
};

console.log(minInsertions('abbbbbbbbbbbbbbbc'))
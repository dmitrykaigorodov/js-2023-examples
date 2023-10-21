// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const N = nums.length

  const dp = new Array(N)
  dp[0] = [{ num: nums[0], max: 1 }]
  for (let i = 1; i < N; i++) { // index "to"
    dp[i] = new Array(i + 1)
    dp[i][i] = { num: nums[i], max: 1 }
    for (let j = i - 1; j >= 0; j--) {
      console.log('---',)
      const num = nums[j]
      const rightNum = dp[i][j + 1].num
      const thisNumIsExtra = num < rightNum ? 1 : 0
      const leftMax = dp[i - 1][j].max
      const rightMax = dp[i][j + 1].max + thisNumIsExtra
      if (leftMax < rightMax) {
        dp[i][j] = { num: thisNumIsExtra ? num : rightNum, max: rightMax }
        console.log('right', num < rightNum, i, j, dp[i][j])
      } else if (leftMax > rightMax) {
        dp[i][j] = { num: dp[i - 1][j].num, max: leftMax }
        console.log('left ', num < rightNum, i, j, dp[i][j])
        console.log('left ', { i, j, num, rightNum, leftMax, rightMax })
      } else {
        const num0 = thisNumIsExtra ? Math.max(num, dp[i - 1][j].num) :
          Math.max(dp[i - 1][j].num, dp[i][j + 1].num)
        dp[i][j] = { num: num0, max: leftMax }
        console.log('equal', { i, j, num, rightNum, leftMax, rightMax })
      }
    }
    console.log(i, dp[i])
    console.log("==================")
  }
  return dp[N - 1][0].max
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
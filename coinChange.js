// https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1)

  // coins = coins.filter(coin => coin <= amount)
  // coins = coins.sort().reverse()

  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    dp[i] = -1
    for (const coin of coins) {
      const potencial = (coin <= i && dp[i - coin] != -1) ? dp[i - coin] + 1 : -1
      if (potencial != -1 && (potencial < dp[i] || dp[i] == -1)) {
        dp[i] = potencial
      }
    }
  }
  console.log(dp)
  return dp[amount]
};
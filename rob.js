/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/house-robber/
var rob = function(nums) {
    const N = nums.length
    const total = new Array(N)
    total[0] = nums[0]
    total[1] = nums[1]
    total[2] = nums[0] + nums[2]
    for (let i = 3; i < N; i++) {
        total[i] = Math.max(total[i-2] || 0, total[i-3] || 0) + nums[i]
    }
    console.log(total)
    return Math.max(total[N-1] || 0, total[N-2] || 0)
};
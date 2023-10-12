/**
 * @param {number[]} obstacles
 * @return {number}
 */
// https://leetcode.com/problems/minimum-sideway-jumps/submissions/
var minSideJumps = function(obstacles) {
    const N = obstacles.length 
    const MAX = N + 1
    let sideJumps = [MAX, 1, 0, 1]

    for (i = 1; i < obstacles.length; i++) {
        sideJumps[obstacles[i]] = MAX
        sideJumps[1] = Math.min(sideJumps[1], sideJumps[2]+1, sideJumps[3]+1)
        sideJumps[2] = Math.min(sideJumps[2], sideJumps[1]+1, sideJumps[3]+1)
        sideJumps[3] = Math.min(sideJumps[3], sideJumps[1]+1, sideJumps[2]+1)
        sideJumps[obstacles[i]] = MAX
    }
    return Math.min(sideJumps[1], sideJumps[2], sideJumps[3])
};
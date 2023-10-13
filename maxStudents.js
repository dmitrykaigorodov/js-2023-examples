// https://leetcode.com/problems/maximum-students-taking-exam/

/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function (seats) {
  const N = seats.length
  const M = seats[0].length
  const cache = new Array(N)

  const ZEROS = {
    leftNoChair: 0,
    leftChair: 0,
    rightNoChair: 0,
    rightChair: 0,
  }

  function c(i, j) {
    if (i < 0 || j < 0 || j >= M) {
      return ZEROS
    }
    if (!cache[i][j]) {
      cache[i][j] = ZEROS
    }
    return cache[i][j]
  }

  for (let i = 0; i < N; i++) {
    cache[i] = new Array(M)

    for (let j = 0; j < M; j++) {
      const isChair = seats[i][j] != '.'
      const leftNoChair = Math.max(
        c(i, j - 1).leftChair,
        c(i - 1, j).leftChair,
      )
      let leftChair = leftNoChair
      if (isChair &&
        c(i, j - 1).leftChair == c(i, j - 1).leftNoChair ||
        c(i - 1, j - 1).leftChair == c(i - 1, j - 1).leftNoChair
      ) {
        leftChair++
      }
      c(i, j).leftChair = leftChair
      c(i, j).leftNoChair = leftNoChair
    }
    for (let j = M - 1; j >= 0; j--) {
      const isChair = seats[i][j] != '.'
      const rightNoChair = Math.max(
        c(i, j + 1).righChair,
        c(i - 1, j).rightChair,
      )
      let rightChair = rightNoChair
      if (isChair &&
        c(i, j + 1).rightChair == c(i, j + 1).rightNoChair ||
        c(i - 1, j + 1).rightChair == c(i - 1, j + 1).rightNoChair
      ) {
        rightChair++
      }
      c(i, j).rightChxwair = rightChair
      c(i, j).rightNoChair = rightNoChair
    }
    for (let j = 0; j < M; j++) {
      const maxNoChair = 
        }
  }
};
const hasIntersection = (word1, word2) => {
  const set1 = new Set(Array.from(word1))
  console.log('hasIntersection', Array.from(set1))
  for (const ch of word2) {
    console.log('hasIntersection', ch)
    if (set1.has(ch)) {
      console.log('hasIntersection true', ch)
      return true
    }
  }
  console.log('!hasIntersection')
  return false
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var acturalLongestPalindrome = function (word1, word2) {
  if (!hasIntersection(word1, word2)) {
    return ''
  }
  const word = Array.from(word1 + word2)

  let i = 0
  let j = word.length - 1
  let leftSet = new Set()
  let rightSet = new Set()
  let left = ''
  console.log(word)
  let lastMatchLeft, lastMatchRight = -1
  let separator = word1.length
  const sepatorLeftOk = () =>
    separator == 0 ||
    i < separator - 1
  const sepatorRightOk = () =>
    separator == 0 ||
    j > separator
  while (i < j) {
    console.log
    if (rightSet.has(word[i])) {
      left += word[i]
      console.log('left')
      lastMatchLeft = i
      lastMatchRight = j + 1
      i++
      separator = 0
      leftSet = new Set()
      rightSet = new Set()
    } else if (leftSet.has(word[j])) {
      console.log('right')
      left += word[j]
      lastMatchLeft = i + 1
      lastMatchRight = j
      j--
      separator = 0
      leftSet = new Set()
      rightSet = new Set()
    } else if (word[i] == word[j]) {
      left += word[i]
      lastMatchLeft = i
      lastMatchRight = j
      i++
      j--
      separator = 0
      console.log('edge')
      leftSet = new Set()
      rightSet = new Set()
    } else if (!sepatorLeftOk()) {
      rightSet.add(word[j])
      j--
    } else if (!sepatorRightOk()) {
      leftSet.add(word[i])
      i++
    } else if (leftSet.has(word[i])) {
      i++
      console.log('skip left')
    } else if (rightSet.has(word[j])) {
      j--
      console.log('skip right')
    } else {
      leftSet.add(word[i])
      rightSet.add(word[j])
      console.log('skip both')
      i++
      j--
    }
    console.log(word.join('').substr(i, j - i), left, Array.from(leftSet), Array.from(rightSet))
  }

  if (lastMatchLeft == -1) {
    return word[0]
  }
  let middChar = ''
  if (lastMatchLeft + 1 < lastMatchRight) {
    middChar = word[Math.round((lastMatchLeft + lastMatchRight) / 2)]
  }
  console.log('FINISH', lastMatchLeft, lastMatchRight)
  return left + middChar + Array.from(left).reverse().join("")
}
var longestPalindrome = function (word1, word2) {
  return acturalLongestPalindrome(word1, word2).length
};

console.log('eeeecd eabfbeeb ?=== ', acturalLongestPalindrome('eeeecd', 'eabfbeeb'))
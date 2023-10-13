/**
 * @param {string[]} words
 * @return {string[]}
 */

class LetterTree {
  root = {}
  add(word) {
    // let char
    let pointer = this.root
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i)
      let nextPointer = pointer[ch]
      if (!nextPointer) {
        nextPointer = {}
        pointer[ch] = nextPointer
        // console.log('adding', word, ch, pointer)
      }
      pointer = nextPointer
    }
    pointer['#'] = 1
    // console.log('terminating', word, pointer, JSON.stringify(this.root))
  }
  search(word) {
    let char
    let pointer = this.root
    for (let i = 0; i < word.length; i++) {
      char = word.charAt(i)
      if (pointer['#']) {
        const rest = word.substr(i)
        console.log('rest', rest)
        if (this.search(rest)) {
          console.log('found rest', rest)
          return true
        }
      } {
        console.log('search more', word, pointer)
      }
      let nextPointer = pointer[char]
      if (!nextPointer) {
        return false
      }
      pointer = nextPointer
    }
    console.log('search final', word, pointer)
    return pointer['#']
  }
}

var findAllConcatenatedWordsInADict = function (words) {
  words = [...new Set(words)]
  words.sort((w1, w2) => w1.length - w2.length)
  // now words are unique and short words come first
  const retVal = new Array()
  const letterTree = new LetterTree()

  for (const word of words) {
    if (letterTree.search(word)) {
      retVal.push(word)
    } else {
      letterTree.add(word)
    }
  }

  return retVal
};
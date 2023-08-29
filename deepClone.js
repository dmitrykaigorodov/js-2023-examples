
const a = { a: {} }
const objWithCirc = { b: 1, c: a }
a.a = objWithCirc.c

console.log(objWithCirc)

const deepCopyRec = (obj) => {
}

const simple = {
  arr: [1, 2, 3, 4, 5, 6],
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: {
      g: 5,
      h: 6
    }
  },
  x: {
    y: 7,
    z: {
      w: 8
    }
  }

}

const DEBUG_CIRC = false

const deepCopy = (obj) => {
  if (typeof obj !== 'object') return obj

  const deepCopyRoot = {}
  const visited = new Set()
  let edge = new Map()
  edge.set(obj, deepCopyRoot)

  while (edge.size > 0) {
    const newEdge = new Map()
    edge.forEach((deep, orig) => {
      if (visited.has(orig)) {
        if (DEBUG_CIRC) {
          deep._circ = true
          // console.log('CIRCULAR REFERENCE', {visited})
        }
        return
      }

      for (const [key, value] of Object.entries(orig)) {
        if (typeof value === 'object') {
          const deepChild = deep[key] = {}
          newEdge.set(value, deepChild)
        } else {
          deep[key] = value
        }
      }
      visited.add(orig)
    })
    edge = newEdge
  }
  return deepCopyRoot
}

const orig = { a: 1, b: 2, c: { d: 3 } }
const copy = deepCopy(orig)
console.log(copy)
console.log(copy.a === orig.a)
console.log(copy.c === orig.c)
console.log(deepCopy(simple))
console.log(deepCopy(objWithCirc))


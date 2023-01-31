
const pure = (num) => {
  return num + num;
}

let counter = 0;

const increment = () => {
  return counter++;
}


// console.log(pure(2))
// console.log(pure("2"))

// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log({ counter })
// console.log('======================')



// closure

let magicCounter = () => {
  let counter = 0

  const magic = (inc) => {
    if (typeof inc != "number") {
      throw new Error('inc is not a number')
    }

    counter += inc

    return counter;
  }
  
  return magic
}

const magic = magicCounter()
// console.log(magic(7))
// console.log(magic(1))
// console.log(magic(7))
// console.log(magic(7))
// console.log('======================')


const more = (() => {
  let counter = 0

  return {
    inc: (value) => {
      if (typeof value != "number") {
        throw new Error('inc is not a number')
      }

      counter += value

      return counter;
    },
    mult: (value) => {
      if (typeof value != "number") {
        throw new Error('inc is not a number')
      }

      counter *= value

      return counter;
    },
  }
})()

// console.log(more.inc(7))
// console.log(more.mult(3))
// console.log(more.inc(1))
// console.log(more.inc(2))
// console.log(more.inc(100))
// console.log(more)
// console.log('======================')


// classes

function createUser(name, age, salary) {
  // validate
  return {
    name,
    age,
    __salary: salary,
    raise: function (inc) {
      this.__salary += inc
    },    
    getSalary: function () {
      return this.__salary
    }
  }
}

// const kolya = createUser('Kolya', 25, 2000)
// console.log(kolya)
// kolya.raise(100)
// console.log(kolya)
// console.log(kolya.getSalary())
// console.log('======================')

const vasya = {
  name: 'Vasya',
  age: 30,
  salary: 1500
}


/// Array.map


const numbers = [1, 3, 10, 42, 777]
const squares = numbers.map(value => value * value)
// console.log({
//   numbers,
//   squares
// })


const mapToo = function (fn) {
  const retVal = []
  for (let i = 0; i <  this.length; i++) {
    const result = fn(this[i], i, this) 
    retVal.push(result)
  }
  return retVal
}
// numbers.mapToo = mapToo
// console.log('mapToo', numbers.mapToo(value => -value))
// console.log('mapToo', squares.mapToo(value => -value)) // Error
// console.log('======================')



Object.defineProperty(Array.prototype, 'mapToo', {
  value: mapToo
})
Object.defineProperty(Array.prototype, 'halves', {
  value:  function (fn) {
    return this.mapToo(number => number / 2)
  }
})
// console.log([84].halves())
// console.log([1, 2, 3].mapToo(elt => elt * elt * elt))
// console.log([1, 2, 3].mapToo(elt => ({elt, cube: elt * elt * elt})))
// console.log('======================')


const user = null
const local1 = user?.address?.local || ''
console.log({local1})
const local2 = user.address.local


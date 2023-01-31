const values = [{value: 1}, {value: 2}, {value: 3}]
const strings = values.map(item => ' ' + item.value)
console.log(strings)

let str2 = ''
const XX = values.forEach(item => str2 += item.value + ' ')
console.log({ XX })


console.log('Reduce', values.reduce(
  (concat, item) => concat + item.value,
  ''
))

let str7 = ''
for (const item of values) {
  str7 += item.value
}
console.log({ str7 })

console.log({ str2 })


const nums = [1, 2, 3]
console.log({join: nums.join(' ')})
console.log({joinValues: values.join(' ')})
console.log(nums.filter(num => num >= 2))
console.log(nums.reverse())


const nums2 = [1, 2, 3, 1, 11, 1, -1, -3, -300, 'Vasily', NaN, -Infinity, ' ', '-', '', false]
console.log('naive sort', nums2.sort())

const nums3 = [1, 2, 3, 1, 1, -1, -3, -300]
console.log('sort as numbers', nums3.sort((a, b) => a-b))
console.log('Array after being sorted', nums3)

const alesya = 'Alesya'
console.log(alesya.split('').map(letter => letter.toUpperCase()).join(' '))
// console.log(alesya.split('').map(toUpperCase).join(' '))

// console.log(alesya.split('').map(letter => letter.toUpperCase()).join(' '))
let alesya2 = ''
for (const letter of alesya.split('')) {
  alesya2 = letter.toUpperCase() + " "  + alesya2
}
console.log({alesya2})


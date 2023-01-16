const salaries = [
  400,
  500,
  1500,
  5000, 
  15000
] // array

const average = (array) => {
  let sum = 0
  for (const salary of array) {
    sum = sum + salary
    // sum += salary
    // shorthand for sum = sum + salary
  }
  return sum / array.length
}
// console.log(average(salaries))

const maxSalary = (array) => {
  let max = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}
// console.log(maxSalary(salaries))

const fake = (array) => {
  console.log("before fake")
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
  console.log("after")
}

const fake2 = (array) => {
  console.log("before fake2")
  {
    let i = 0;
    while(i < array.length) {     
      console.log(array[i])
      i++;
    }
  }
  console.log("after")
}
fake(salaries) 
fake2(salaries) 


const someOtherProperty = 'some other value'

const user = {
  name: 'John',
  age: 30,
  "likes birds": true,  // multiword property name must be quoted
  [someOtherProperty]: true, // multiword property name must be quoted
  addresses: [
    {
      city: 'New York',
      street: 'Main St',
      number: 123
    },
    {
      city: 'Los Angeles',
      street: 'The first infinite loop',
      number: Infinity
    }
  ]
}
user['likes cats'] = false
// user.'likes dogs' = false // SyntaxError: Unexpected string


const users = [
  {
    name: 'John',
    age: 30,
    "likes birds": true,  // multiword property name must be quoted
  },
  {
    name: 'Jane',
    age: 25,
    "likes birds": false,  // multiword property name must be quoted
  },
]

const walkObject = (obj) => {
  for (const key in obj) {
    console.log(key, obj[key], typeof obj[key])
  }
}
// walkObject(user)

// user["likes cats"] = undefined
// console.log(user)
// delete user["likes cats"]
// console.log(user)







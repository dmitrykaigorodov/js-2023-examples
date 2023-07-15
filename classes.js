
// function User(name) {
//   if (!this || global === this) {
//     return new User(...arguments)
//   }

//   this.name = name

//   this.sayHi = function () {
//     console.log(`Hi, my name is ${this.name}.`)
//   }
// }

class User {
  constructor(name) {
    this.name = name
  }

  sayHi = function () {
    console.log(`Hi, my name is ${this.constructor} ${this.name}.`)
  }
  static abc() {
    console.log("hi")
  }
}



class AdminUser extends User { 
  constructor(name, email, isFake) {
    super(name)

    this.__email = email

    if (isFake) {
      this.shareEmail = function () {
        return 'test@gmail.com'
      }
    }
  }

  shareEmail () {
    if (!this.__email) {
      throw "Access Denied!"
    }
    return this.__email
  }
}
AdminUser.prototype.abc = function() {
  return 'me ' + this.name
}

const alesya = new AdminUser("Alesia", 'alesia@gmail.com')

console.log(alesya.abc())
// console.log(pavel.hasOwnProperty)
// console.log(pavel.hasOwnProperty('name'))
// console.log(pavel.hasOwnProperty('hasOwnProperty'))
// console.log(Object.prototype.hasOwnProperty('hasOwnProperty'))
for (const key in alesya) {
  const value = alesya[key]
  console.log(`${key}: ${value} ${alesya.hasOwnProperty(key)}`);
}

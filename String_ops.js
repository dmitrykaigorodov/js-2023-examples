
String.prototype.plus = function (val2) {
  let extra = 0
  let result = ''
  const val1 = this
  
  for (let i = 0; i < val2.length || i < val1.length; i++) {
    const digit1 = val1[val1.length-i-1] || 0
    const digit2 = val2[val2.length - i-1] || 0
    let digit = Number(digit1) +  Number(digit2) + extra
    
    if (digit >= 10) {
      extra = 1
      digit -= 10
    } else {
      extra = 0
    }

    result = digit + result
  }
  if (extra) {
    result = extra + result
  }
  return result
} 


String.prototype.minus = function (val2) {
  let extraLoan = 0
  let result = ''
  const val1 = this
  
  for (let i = 0; i < val2.length || i < val1.length; i++) {
    const digit1 = val1[val1.length-i-1] || 0
    const digit2 = val2[val2.length - i-1] || 0
    let digit = Number(digit1) -  Number(digit2) + extraLoan
    
    if (digit < 0) {
      extraLoan = -1
      digit += 10
    } else {
      extraLoan = 0
    }

    result = digit + result
  }
  if (extraLoan) {
    return '-' + val2.minus(this)
  }
  return result
}  

const multStringToDigit = (str, mDigit) => {
  let extra = 0
  let result = ''
  mDigit = Number(mDigit)
  
  for (let i = str.length-1; i >= 0; i--) {
    const strDigit = str[i]
    let digit = Number(strDigit) * mDigit + extra
    
    if (digit > 9) {
      extra = (digit  - (digit %10)) / 10
      digit = digit % 10
    } else {
      extra = 0
    }
    result = digit + result
  }
  if (extra) {
    result = extra + result
  }
  return result
}
String.prototype.multiply = function (val2) {
  let result = "0"
  const val1 = this
  let multiplicator = ""

  for (let i = val2.length - 1; i >= 0; i--) {
    const digit = Number(val2[i])
    const mult = multStringToDigit(this, digit)
    result = result.plus(mult + multiplicator)
    multiplicator += '0'
  }
  return result
}



const testPlus = (val1, val2, expected) => {
  const actual = val1.plus(val2);
  actual === expected ?
    console.log('pass', {val1, val2, expected, actual}):     
    console.log('fail', {val1, val2, expected, actual})
}
testPlus('1', '999', '1000')


const testMinus = (val1, val2, expected) => {
  const actual = val1.minus(val2);
  actual === expected ?
    console.log('pass', {val1, val2, expected, actual}):     
    console.log('fail', {val1, val2, expected, actual})
}
testMinus('9', '1', '8')
testMinus('1', '9', '-8')
testMinus('1111', '9', '1102')
testMinus('9', '1111', '-1102')

const testMultDigit = (str, digit, expected) => {
  const actual = multStringToDigit(str, digit);
  actual === expected ?
    console.log('pass', {str, digit, expected, actual}):     
    console.log('fail', {str, digit, expected, actual})
}
testMultDigit('123', 2, '246')
testMultDigit('12', 7, '84')
testMultDigit('99', 2, '198')

const testMultiply = (val1, val2, expected) => {
  const actual = val1.multiply(val2);
  actual === expected ?
    console.log('pass', {val1, val2, expected, actual}):     
    console.log('fail', {val1, val2, expected, actual})    
}
testMultiply('123', '3', '369')
testMultiply('11', '11', '121')

/**
 * if String.lessThen(str2)  => 0
 * else 
 *  try guess base on string size difference
 *  10xN vs 7xN => 1000 or 100 => result += 100 + (10xN).divide(100*7xN)
 */



/**
 * Perform arithmetic operations on strings without relying on bigint or arithmetic libraries. The operations should function as string functions, considering only positive integers (you can avoid negative numbers, all numbers will be positive and integer).
String.plus(string) => string
String.minus(string) => string
String.divide(string) => string
String.multiply(string) => string
 */


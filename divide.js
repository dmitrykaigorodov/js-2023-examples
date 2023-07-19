/**
 * Perform arithmetic operations on strings without relying on bigint or arithmetic libraries. The operations should function as string functions, considering only positive integers (you can avoid negative numbers, all numbers will be positive and integer).
String.plus(string) => string
String.minus(string) => string
String.divide(string) => string
String.multiply(string) => string
 */

String.prototype.minus = function (val2) {
  let extraLoan = 0;
  let result = "";
  const val1 = this;

  for (let i = 0; i < val2.length || i < val1.length; i++) {
    const digit1 = val1[val1.length - i - 1] || 0;
    const digit2 = val2[val2.length - i - 1] || 0;
    let digit = Number(digit1) - Number(digit2) + extraLoan;

    if (digit < 0) {
      extraLoan = -1;
      digit += 10;
    } else {
      extraLoan = 0;
    }

    result = digit + result;
  }

  if (extraLoan) {
    return "-" + val2.minus(this);
  }

  return result;
};

function firstIncompleteDividend(val1, divisor) {
  let quotient = 0;
  let substring = "";
  let i = 0;

  for (i; quotient < 1; i++) {
    substring = substring + val1[i];
    quotient = Math.floor(Number(substring) / divisor);
  }

  const reminder = Number(substring) - quotient * divisor;
  const reminderStr = reminder + "";
  const result = quotient.toString();

  return { reminderStr, result, i };
}

function nextIncompleteDividend(reminderStr, val1, divisor, i) {
  let quotient = 0;
  let substring = reminderStr;
  let a = 0;
  let result = "";
  let str = "";

  for (i; quotient < 1; i++) {
    substring = substring + val1[i];
    quotient = Math.floor(Number(substring) / divisor);
    a++;
  }
  const reminder = Number(substring) - quotient * divisor;
  const reminderStrNew = reminder + "";

  for (let i = 1; i < a; i++) {
    str += "0";
  }
  result = str + quotient.toString();

  return { reminderStrNew, result, i, a };
}

String.prototype.divide = function (val2) {
  const val1 = this;

  const difference = val1.minus(val2);
  if (difference < 0) {
    return "0";
  }

  const divisor = Number(val2);
  const firstIncompleteDividendVal = firstIncompleteDividend(val1, divisor);

  let reminderStr = firstIncompleteDividendVal.reminderStr;
  let i = firstIncompleteDividendVal.i;
  let result = firstIncompleteDividendVal.result;

  for (let j = i; j <= val1.length; j += a) {
    const nextIncompleteDividendVal = nextIncompleteDividend(
      reminderStr,
      val1,
      divisor,
      i
    );

    reminderStr = nextIncompleteDividendVal.reminderStrNew;

    if (!(nextIncompleteDividendVal.result === "NaN")) {
      result = result + nextIncompleteDividendVal.result;
    }
    i = nextIncompleteDividendVal.i;
    a = nextIncompleteDividendVal.a;
  }
  return result;
};

// const testPlus = (val1, val2, expected) => {
//   const actual = val1.plus(val2);
//   actual === expected
//     ? console.log("pass", { val1, val2, expected, actual })
//     : console.log("fail", { val1, val2, expected, actual });
// };
// testPlus("1", "999", "1000");

// const testMinus = (val1, val2, expected) => {
//   const actual = val1.minus(val2);
//   actual === expected
//     ? console.log("pass", { val1, val2, expected, actual })
//     : console.log("fail", { val1, val2, expected, actual });
// };
// testMinus("9", "1", "8");
// testMinus("1", "9", "-8");
// testMinus("1111", "9", "1102");
// testMinus("9", "1111", "-1102");

// const testMultDigit = (str, digit, expected) => {
//   const actual = multStringToDigit(str, digit);
//   actual === expected
//     ? console.log("pass", { str, digit, expected, actual })
//     : console.log("fail", { str, digit, expected, actual });
// };
// testMultDigit("123", 2, "246");
// testMultDigit("12", 7, "84");
// testMultDigit("99", 2, "198");

// const testMultiply = (val1, val2, expected) => {
//   const actual = val1.multiply(val2);
//   actual === expected
//     ? console.log("pass", { val1, val2, expected, actual })
//     : console.log("fail", { val1, val2, expected, actual });
// };
// testMultiply("123", "3", "369");
// testMultiply("11", "11", "121");

// const testDivide = (val1, val2) => {
//   const actual = val1.divide(val2);

//   return actual;
// };
// testDivide("123", "3");
// testDivide("3", "123");

/**
 * if String.lessThen(str2)  => 0
 * else
 *  try guess base on string size difference
 *  10xN vs 7xN => 1000 or 100 => result += 100 + (10xN).divide(100*7xN)
 */

// const testFirstIncompleteDividend = (val1, val2) => {
//   const actual = firstIncompleteDividend(val1, val2);
//   console.log({ val1, val2, actual });
// };

// testFirstIncompleteDividend("12574", "21");

// const testNextTrueDigit = (val1, digit2) => {
//   const actual = nextTrueDigit(3, val1, digit2, 3, 2, 1);
//   console.log({ val1, digit2, actual });
// };

// testNextTrueDigit("25748", "42");

const testDivide = (val1, val2, expected) => {
  const actual = val1.divide(val2);
  actual === expected
    ? console.log("pass", { val1, val2, expected, actual })
    : console.log("fail", { val1, val2, expected, actual });
};
testDivide("2574", "11", "234");
testDivide("1", "1", "1");
testDivide("7842269", "262", "29932");
testDivide("262", "7842269", "0");
testDivide("262", "263", "1");
testDivide("4564865165448484", "464654846", "9824206");
testDivide("10000000000000000000000001", "11", "909090909090909090909091");
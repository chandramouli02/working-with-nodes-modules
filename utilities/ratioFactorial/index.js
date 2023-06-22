//getratio factorial funcs
const ratio = require("../ratio/index.js");
const factorial = require("../factorial/index.js");

function ratioAndFactorial(num1, num2, num3) {
  let ratioOfTwoNums = ratio(num1, num2);
  let factorialOfThirdNum = factorial(num3);
  let result = {
    ratio: ratioOfTwoNums,
    factorial: factorialOfThirdNum,
  };
  return result;
}

console.log(ratioAndFactorial(2, 3, 4));

module.exports = ratioAndFactorial;

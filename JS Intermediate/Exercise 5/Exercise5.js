/* a)
The provided code returns the wrong answer because of the way floating point numbers are stored in memory.
Computers store floating point numbers in binary, and some decimal values cannot be represented exactly
in binary which leads to small rounding errors when performing calculation with decimal numbers
*/

let twentyCents = 0.20
let tenCents = 0.10
let result = twentyCents + tenCents

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

// b)
function currencyAddition(fixedTwenty, fixedTen) {
    return parseFloat((fixedTwenty + fixedTen).toFixed(2));
  }

  console.log(`${twentyCents} + ${tenCents} = ${result.toFixed(2)}`) // 0.2 + 0.1 = 0.30

// c)
  function currencyOperation(fixedTwenty, fixedTen, operation) {
    switch(operation) {
      case '+':
        return parseFloat((fixedTwenty + fixedTen).toFixed(2));
      case '-':
        return parseFloat((fixedTwenty - fixedTen).toFixed(2));
      case '/':
        return parseFloat((fixedTwenty / fixedTen).toFixed(2));
      case '*':
        return parseFloat((fixedTwenty * fixedTen).toFixed(2));
      default:
        return NaN;
    }
  }

//d)
function currencyOperation(fixedTwenty, fixedTen, operation, numDecimals) {
    var factor = Math.pow(10, numDecimals);
    switch(operation) {
      case '+':
        return parseFloat(((fixedTwenty + fixedTen) * factor).toFixed(0)) / factor;
      case '-':
        return parseFloat(((fixedTwenty - fixedTen) * factor).toFixed(0)) / factor;
      case '/':
        return parseFloat(((fixedTwenty / fixedTen) * factor).toFixed(0)) / factor;
      case '*':
        return parseFloat(((fixedTwenty * fixedTen) * factor).toFixed(0)) / factor;
      default:
        return NaN;
    }
  }

console.log(fixedTwenty + fixedTen);

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true
  
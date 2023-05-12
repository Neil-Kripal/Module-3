let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
/*
let addition = three + four //34
let multiplication = three * four //12
let division = three / four //0.75
let subtraction = three - four // -1
let lessThan1 = three < four //true
let lessThan2 = thirty < four //false
*/

//The 'multiplication' and lessThan2' do not have the correct results

/* for multiplication lessThan2 it is 2 variables defined as strings so
when performed the string concatenates instead of using a arithmetic
multiplication*/

//updated expressions

let addition = three + four // "34"
let multiplication = +three * +four // 12
let division = three / four // 0.75
let subtraction = three - four // -1
let lessThan1 = three < four // true
let lessThan2 = +thirty < +four // false

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
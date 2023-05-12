let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports.slice();
moreSports.push('Tennis');
moreSports.unshift('Soccer');
console.log(moreSports); // ["Soccer", "Hockey", "Cricket", "Volleyball", "Tennis"]
console.log(teamSports); // ["Hockey", "Cricket", "Volleyball"]

let dog1 = 'Bingo';
let dog2 = dog1;
dog2 = 'Fido';
console.log(dog1); // "Bingo"
console.log(dog2); // "Fido"

let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = { ...cat1 };
cat2.name = 'Snowy';
console.log(cat1.name); // "Fluffy"
console.log(cat2.name); // "Snowy"



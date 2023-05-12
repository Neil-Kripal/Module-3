// a,b) Time, Minutes passed and Seconds past today
const today = new Date();
console.log("\n");
console.log('Current time is ' + today.toLocaleTimeString());
const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + ' minutes have passed so far today');
const totalSeconds = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today');
console.log("\n");

//c) Age
const birthdate = new Date('2000-07-07');
const diffTime = Math.abs(today - birthdate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
const diffYears = Math.floor(diffDays / 365);
const diffMonths = Math.floor((diffDays % 365) / 30);
const diffDaysLeft = diffDays - (diffYears * 365) - (diffMonths * 30);

console.log(`I am ${diffYears} years, ${diffMonths} months and ${diffDaysLeft} days old.`);
console.log("\n");

//d) Day in Between
function daysInBetween(date1, date2) {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  
  const date1 = new Date('2023-05-01');
  const date2 = new Date('2023-05-12');
  console.log(daysInBetween(date1, date2));
  




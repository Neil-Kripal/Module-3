let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

// a) 
function sumSalaries(salaries) {
  const salaryValues = Object.values(salaries);
  const total = salaryValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return total;
}
console.log("\n");
console.log("Sum of Salaries");
console.log(sumSalaries(salaries)); 
console.log("\n");

// b)
function topEarner(salaries) {
  let highestSalary = 0;
  let topEarnerName = "";
  for (const name in salaries) {
    const salary = salaries[name];
    if (salary > highestSalary) {
      highestSalary = salary;
      topEarnerName = name;
    }
  }
  return topEarnerName;
}
console.log("Top Earner");
console.log(topEarner(salaries));
console.log("\n");


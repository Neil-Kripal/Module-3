//getGreeting using a function expression syntax:

let getGreeting = function(name) {
    return `Hello ${name}!`;
}


// using the arrow function syntax:

let getGreeting1 = (name) => `Hello ${name}!`;

console.log(getGreeting('Alice')); // Outputs: "Hello Alice!"
console.log(getGreeting1('Bob')); // Outputs: "Hello Bob!"

// will both work the same way as the original getGreeting Function


// a) Delay Function
Function.prototype.delay = function(ms) {
    const func = this;
    return function(...args) {
      setTimeout(() => {
        // b) replacing apply to allow delayed functions to take any number of parameters
        func(...args);
      }, ms);
    };
  };
  
// c)
function multiply(a, b, c, d) {
    console.log( a * b * c * d);
    }
    multiply.delay(500)(5, 5, 15, 18); // prints 6750 after 500 milliseconds

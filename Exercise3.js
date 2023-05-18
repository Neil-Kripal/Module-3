
function printMe() {
    console.log('printing debounced message')
    }

// a)
function debounce(func, ms) {
    let timeoutId;
  
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  }
  
  function printMe(msg) {
    console.log(`printing debounced message: ${msg}`);
  }
  
  printMe = debounce(printMe, 1000);

    setTimeout( printMe, 100, 'First Message');
    setTimeout( printMe, 200, 'Second Message');
    setTimeout( printMe, 300, 'Third Message');


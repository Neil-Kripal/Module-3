function printFibonacciTimeouts(limit) {
  let a = 1;
  let b = 1;
  let count = 0;

  console.log(a); // Output the initial number
  console.log(b); // Output the second number

  function printNextFibonacci() {
    const next = a + b;
    console.log(next);
    a = b;
    b = next;
    count++;

    if (count < limit || !limit) {
      setTimeout(printNextFibonacci, 1000);
    }
  }

  if (limit) {
    setTimeout(printNextFibonacci, 1000);
  }
}

printFibonacciTimeouts(17); // Print 17 Fibonacci numbers

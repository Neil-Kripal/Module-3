// First Version of Truncation
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + '...';
  } else {
    return str;
  }
}

// Second Version of Truncation
function truncate(str, max) {
  return (str.length > max) ? str.slice(0, max) + '...' : str;
}

//Output
console.log(truncate('This text will be truncated if it is too long', 25)); // This text will be truncat...
console.log(truncate('This text will not be truncated', 35)); // This text will not be truncated
console.log(truncate('Another example of a truncated text', 10)); // Another ex...



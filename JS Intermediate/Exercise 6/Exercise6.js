const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray) {
  const uniqueArray = [];
  for (let i = 0; i < duplicatesArray.length; i++) {
    if (uniqueArray.indexOf(duplicatesArray[i]) === -1) {
      uniqueArray.push(duplicatesArray[i]);
    }
  }
  return uniqueArray;
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(`[${unique(testScores).join(', ')}]`); // [ 55, 84, 97, 63, 32, 91, 43 ]
const animals = ['Tiger', 'Giraffe'];

// Task a: add 2 new values to the end
animals.push('Elephant', 'Lion');
console.log(animals); // ['Tiger', 'Giraffe', 'Elephant', 'Lion']

// Task b: add 2 new values to the beginning
animals.unshift('Zebra', 'Monkey');
console.log(animals); // ['Zebra', 'Monkey', 'Tiger', 'Giraffe', 'Elephant', 'Lion']

// Task c: sort the values alphabetically
animals.sort();
console.log(animals); // ['Elephant', 'Giraffe', 'Lion', 'Monkey', 'Tiger', 'Zebra']

// Task d: replace the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal('Gazelle');
console.log(animals); // ['Elephant', 'Giraffe', 'Gazelle', 'Monkey', 'Tiger', 'Zebra']

// Task e: return a new array containing all the animals that begin with the beginsWith string
function findMatchingAnimals(beginsWith) {
  const matchingAnimals = animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()));
  return matchingAnimals;
}

console.log(findMatchingAnimals('g')); // ['Giraffe', 'Gazelle']
console.log(findMatchingAnimals('Z')); // ['Zebra']
console.log(findMatchingAnimals('t')); // ['Tiger'] 

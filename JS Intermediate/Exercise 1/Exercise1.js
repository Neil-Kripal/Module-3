function ucFirstLetters(str) {
    // Split the string into an array of words
    let words = str.split(' ');
  
    // Loop through the words array
    for (let i = 0; i < words.length; i++) {
      // Get the first character of the word and capitalize it
      let firstChar = words[i].charAt(0).toUpperCase();
  
      // Get the rest of the characters in the word and concatenate them
      let restOfWord = words[i].slice(1);
  
      // Concatenate the capitalized first character and the rest of the word
      words[i] = firstChar + restOfWord;
    }
  
    // Join the words array back into a string and return it
    return words.join(' ');
  }

console.log(ucFirstLetters("los angeles")); // "Los Angeles"
console.log(ucFirstLetters("new york city")); // "New York City"
console.log(ucFirstLetters("san francisco")); // "San Francisco"
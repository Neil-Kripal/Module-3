//camelCase function using a for of loop - Conditional Operator
function camelCase(cssProp) {
  const words = cssProp.split('-');
  let camelCaseProp = words[0];
  for (const word of words.slice(1)) {
    camelCaseProp += word.charAt(0).toUpperCase() + word.slice(1);
  }
  return camelCaseProp;
}

//camCase function using a for loop - Conditional Operator
function camelCase(cssProp) {
  const words = cssProp.split('-');
  let camelCaseProp = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCaseProp += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return camelCaseProp;
}

//camelCase for in loop - Conditional Operator
function camelCase(cssProp) {
  const words = cssProp.split('-');
  let camelCaseProp = words[0];
  for (const i in words) {
    if (i > 0) {
      camelCaseProp += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  return camelCaseProp;
}

//camelCase function usin the - Ternary Operator
function camelCase(cssProp) {
  const words = cssProp.split('-');
  let camelCaseProp = words[0];
  for (let i = 1; i < words.length; i++) {
    camelCaseProp += words[i].charAt(0).toUpperCase() + (i > 0 ? words[i].slice(1) : '');
  }
  return camelCaseProp;
}

console.log(camelCase('margin-left')); // 'marginLeft'
console.log(camelCase('background-image')); // 'backgroundImage'
console.log(camelCase('display')); // 'display'

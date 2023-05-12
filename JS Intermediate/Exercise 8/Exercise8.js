const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) create empty maps
let phoneBookDEF;

// b) create an array of keys and values for phoneBookDEF
const contactsDEF = [
  ['David', '0433221567'],
  ['Ellie', '0455221769'],
  ['Frank', '0412345678']
];

// initialize phoneBookDEF with the array of contacts
phoneBookDEF = new Map(contactsDEF);

// c) update Caroline's phone number
phoneBookABC.set('Caroline', '0422331182');

// d) print the phone books
function printPhoneBook(contacts) {
  for (let [name, number] of contacts) {
    console.log(`${name}: ${number}`);
  }
}

// print both phone books
console.log("Phone book ABC:");
printPhoneBook(phoneBookABC);

console.log("\nPhone book DEF:");
printPhoneBook(phoneBookDEF);

// e) combine the two phone books
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f) print the full list of names in the combined phone book
console.log("\nCombined phone book:");
for (let name of phoneBook.keys()) {
  console.log(name);
}






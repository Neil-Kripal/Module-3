const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a)
function getBookTitle(bookId) {
  const book = books.find((book) => book.id === bookId);
  return book ? book.title : null;
}
console.log("\n"); 
console.log("a) Book Title");
console.log(getBookTitle(1)); 
console.log(getBookTitle(3)); 
console.log(getBookTitle(6));
console.log("\n"); 

// b)
function getOldBooks() {
  return books.filter((book) => book.year < 1950);
}
console.log("b) Old Books");
console.log(getOldBooks());
console.log("\n"); 

// c)
function addGenre() {
  return books.map((book) => ({ ...book, genre: 'classic' }));
}
console.log("c) Book Genres");
console.log(addGenre());
console.log("\n"); 

// d)
function getTitles(authorInitial) {
  return books
    .filter((book) => book.author.charAt(0).toUpperCase() === authorInitial.toUpperCase())
    .map((book) => book.title);
}

console.log("d) Book Titles");
console.log(getTitles('F')); 
console.log(getTitles('G')); 
console.log(getTitles('S')); 
console.log(getTitles('A'));
console.log("\n"); 


// e)
function latestBook() {
    let latest = books[0];
    books.forEach((book) => {
    if (book.year > latest.year) {
    latest = book;
    }
    });
    return latest;
    }
    
    console.log("e) Latest Book");
    console.log(latestBook());
    console.log("\n"); 




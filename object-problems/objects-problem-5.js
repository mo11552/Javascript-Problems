/*Write a JavaScript function to sort the following array of objects by 
title value. 
Step 1: make a object called listOfBooks.
Step 2: make a function called bookTitle with 2 parameters called a and b.
Step 3: make a variable x equal to 0.
Step 4: make a if else if statement sorting the title's in the object.
Step 5: return x
*/

var listOfBooks = [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

function bookTitle(a, b) {
  var x = 0;
  if (a.title > b.title) {
    x = 1;
  } else if (a.title < b.title) {
    x = -1;
  }
  return x;
}
console.log(listOfBooks.sort(bookTitle));





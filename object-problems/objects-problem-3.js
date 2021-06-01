/*Create an object with three items in it, then write a JavaScript function 
that accepts an object and tells you the length 
(tells you how many items are in it) of the object.*/
var person = {
  firstName: "Moyo",
  lastName: "Olojede",
  age: 30,
};

objectLength = Object.keys(person).length;

console.log(objectLength);
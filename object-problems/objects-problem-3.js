/*Create an object with three items in it, then write a JavaScript function 
that accepts an object and tells you the length 
(tells you how many items are in it) of the object.
Step 1: Make a object called person.
Step 2: Create a function called objectLength and make the parameter a obj.
Step 3: Return the length of the object keys.
*/
var person = {
  firstName: "Moyo",
  lastName: "Olojede",
  age: 30,
}

function objectLength(obj) {
  return Object.keys(person).length;
};

console.log(objectLength(person));
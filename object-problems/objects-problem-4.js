/*Create an object, then write a JavaScript function that checks whether an object contains the specified key.
Step 1: Make an object called person.
Step 2: Create a function called specKey that has 2 parameters called obj and key.
Step 3: Return the object person and use the hasOwnProperty attribute with the 2 parameters.
*/

var person = {
  firstName: "Moyo",
  lastName: "Olojede",
  age: 30,
}

function specKey(obj, key) {
  return person.hasOwnProperty(obj, key);
}
console.log(specKey("firstName"));
/*Create an object, then write a JavaScript function that checks whether an object contains the specified key.*/

var person = {
  firstName: "Moyo",
  lastName: "Olojede",
  age: 30,
}

function specKey(obj, key) {
  return person.hasOwnProperty("firstName");
}
console.log(person.hasOwnProperty("firstName"));
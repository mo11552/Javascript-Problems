/*Create a sample object, then write a JavaScript function that deletes 
the property of an object passed to it. Your JavaScript function 
should take in two parameters, the object and the key/property 
you want to delete.*/

var person = {
  firstName: "Moyo",
  lastName: "Olojede",
  age: 30,
  eyeColor: "brown",
};
delete person.firstName;
console.log(person);
/*Create a sample object, then write a JavaScript function that deletes 
the property of an object passed to it. Your JavaScript function 
should take in two parameters, the object and the key/property 
you want to delete.
Step 1: Make a object called person.
Step 2: Make a function called firstPerson that has 2 parameters called obj and key.
Step 3: delete the key from the object.
Step 4: console.log firstName from person.
*/

var person = {
  firstName: "Moyo",
  lastName: "Olojede",
  age: 30,
  eyeColor: "brown",
};

function firstPerson(obj, key) {
    delete obj.key;
};
console.log(firstPerson(person, "firstName"));
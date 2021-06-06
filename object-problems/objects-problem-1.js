/*Create a sample object, then write a JavaScript function that deletes 
the property of an object passed to it. Your JavaScript function 
should take in two parameters, the object and the key/property 
you want to delete.
Step 1: Make a object called person.
Step 2: Make a function called listOfNames that has 2 parameters called obj and key.
Step 3: Make a if statement that deletes the key firstName from the object.
Step 4: return person.
*/

var person = {
  firstName: "Moyo",
  lastName: "Olojede",
  age: 30,
  eyeColor: "brown",
};

function firstPerson(obj, key) {
  if(1 == 1){
    delete person.firstName;
    return person
  } 
};
console.log(firstPerson(person));
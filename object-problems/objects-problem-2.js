/*Create an array of people objects with first name, last name, and age, 
then write a JavaScript program to display the first and last names of all the people.
Step 1: Make an array of objects called people.
Step 2: Make a function called listOfNames that has 2 parameters called arr and key.
Step 3: Make a if statement that deletes the key age from the array of objects.
Step 4: return people.
*/
var people =[ 
    {
      firstName: "Moyo",
      lastName: "Olojede",
      age: 30,
    },
    {
      firstName: "Anthony",
      lastName: "Roberts",
      age: 30,
    },
    {
      firstName: "Justin",
      lastName: "Thompson",
      age: 30,
    },
]

 function listOfNames(array, key, key2) {
   for(i = 0; i < array.length; i++) {
     console.log(array[i][key] + " " + array[i][key2]);
   }
  };
console.log(listOfNames(people, "firstName", "lastName"));


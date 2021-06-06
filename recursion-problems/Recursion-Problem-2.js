/*Write a JavaScript program to compute the sum of an array of integers.
Step 1: Write a function called listOfIntegers.
Step 2: Make a if statement stating if array length is equal to 1 return the first character in the array.
Step 3: Make a else statement to return array.pop + the array.
Step 4: Log in the listOfIntegers.
*/


  function listOfIntegers(array) {
  if (array.length === 1) {
    return array[0];
  }
  else {
    return array.pop() + listOfIntegers(array);
  }
};

console.log(listOfIntegers([1,3,4,5,6]));
/* Write a JavaScript function that takes in two parameters, 
an array and a number (n), and return the first n elements of that array. 
Example: If I pass in an array and the number 2, your 
function returns the first 2 elements in that arrays.

Step 1: define a function that takes in two parameters an array and a number and call it arrayOfNumbers.
Step 2: make a if statement stating if n is less than 0 the return is [].
Step 3: slice the array by the number in the function and return it.
Step 4: log in the array and the number in the function.
*/

function arrayOfNumbers(array, n) {
    if (n < 0)
      return [];
    return array.slice(0, n);
  };

console.log(arrayOfNumbers([1, 3, 4, 5], 3));


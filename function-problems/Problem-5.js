/* Write a JavaScript program that iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers that are multiples of both three and five print "FizzBuzz".

Step 1: Make an array and apply a length of 100.
Step 2: Apply a map method and make a function with val and index as parameters.
Step 3: Add if statement showing multiples of 5 and 3 returning FizzBuzz.
Step 4: Add if statement showing multiples of and 3 returning Fizz.
Step 5: Add if statement showing multiples of 5 returning Buzz
Step 6: return index.
Step 7: Make the array a string.
*/

console.log(
  Array.apply(null, {length: 100}).map(function(val, index) {
    index++;
    if (index % 15 == 0){return "FizzBuzz";}
    if (index % 3 == 0){return "Fizz";}
    if (index % 5 == 0){return "Buzz";}
    return index;
  }).join()
);
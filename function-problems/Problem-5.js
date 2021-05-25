/* Write a JavaScript program that iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
For numbers that are multiples of both three and five print "FizzBuzz".

Step 1: Make an variable called i.
Step 2: Make a loop through the variable i.
Step 3: Add if statement showing multiples of 5 and 3 returning FizzBuzz.
Step 4: Add a else if statement showing multiples of and 3 returning Fizz.
Step 5: Add a else if statement showing multiples of 5 returning Buzz
Step 6: console.log i.
*/

var i;
for( i = 1; i <= 100; i++){
  if (  i % 15 == 0) {
   console.log('Fizz Buzz')
    }else if (i % 5 == 0) {
      console.log('buzz');
    }else if (i % 3 == 0) {
      console.log('Fizz');
    }else {
    console.log(i);
    }
}


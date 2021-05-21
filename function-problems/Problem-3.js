/* Write a JavaScript function that accepts two arguments,a string and a letter and the function will count the number 
of occurrences of the specified letter within the string. 

  Step 1: Define a JavaScript function that accepts two arguments, a string and a letter.
  Step 2: Define a variable called numberOfOccurrences and set the initial value to 0.
  Step 3: Start looping through the string.
  Step 4: Check to see the amount of occurrences the letter is in the string.
  Step 5: Increase the numberOfOccurrences variable by 1 for the amount of times the letter is in the string.
  Step 6: Return the numberOfOccurrences.
*/

function countOfOccurrences(str, letter) {
	var numberOfOccurrences = 0;
  	
  	for (let counter = 0; counter < str.length; counter++) {
     	if (letter == str[counter]) {
       		numberOfOccurrences++;
       	}
	}
  
    return numberOfOccurrences;
}

console.log(countOfOccurrences("apple","p"));

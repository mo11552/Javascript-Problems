/*Write a Javascript function that accepts a string as a parameter and returns the number of vowels in that string.

Step 1: define a JavaScript function that accepts a string as a parameter
Step 2: split the string passed in, turn it into an array of each individual letter, 
and store it in a variable called arrayOfLetters 
Step 3: define a variable called numberOfVowels and set the initial value to be equal to 0;
Step 4: define a variable that defines what a vowel is. an array of vowels
Step 5: start looping through our array of letters
Step 6: check if the current letter in our loop is a vowel
Step 7: increase the numberOfVowels variable by one for every letter that's a vowel
Step 8: return the numberOfVowels.
*/

function getNumberOfVowels(str) {
  	var arrayOfLetters = str.split("");
  	var numberOfVowels = 0;
  	var vowels = ["a","e","i", "o", "u"];
  	for (let counter = 0; counter < arrayOfLetters.length; counter++) {
  		if (arrayOfLetters.includes(vowels[counter])) {
  			numberOfVowels++;
  		}
  	}

      return console.log(numberOfVowels);
  }

getNumberOfVowels("This is a list of vowels");
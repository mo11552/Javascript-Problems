/* Write a Javascript function that accepts a string as a parameter and 
finds the longest word in that string.

Step 1: define a JavaScript function that accepts a string as a parameter
Step 2: split the string passed in, turn it into an array of each individual word,
and store it in a variable called arrayOfWords.
Step 3: define a variable called longestWord that shows the longest word in the array 
Step 4: start looping through the arrayOfWords
Step 5: check which word in the array is the longest word 
Step 6: Log in the the result of the longestWord
*/

function myWords(stringPassedIn) {
  console.log(stringPassedIn)
}
//myWords("this is a list of words");

var myWords = "this is a list of words";

var arrayOfWords = myWords.split(" ");

//console.log(arrayOfWords)

function longestWord() {
for (let counter = 0; counter < arrayOfWords.length; counter++) {
  if(arrayOfWords[counter].length > longestWord.length) {
    longestWord = arrayOfWords[counter];
  }
  }
  return (longestWord);
}
console.log(longestWord());
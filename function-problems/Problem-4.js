/* Write a JavaScript function that checks whether a passed string is palindrome or not? 

Step 1: Define a function that accepts a string as a parameter.
Step 2: Change the string to an array called arrayOfWords.
Step 3: Reverse the arrayOfWords and name the variable reverseArrayOfWords.
Step 4: Make the reverseArrayOfWords into a string and name it reverseWords
Step 5: check to see if the string is a palindrome to see if it is equal to reverseWords.
Step 6: if the string and reverseWords is equal return true.
Step 7: if the string and reverseWords is not equal return false.
*/

function checkPalindrome(str) {
  var arrayOfWords = str.split("")
  var reverseArrayOfWords = arrayOfWords.reverse();
  var reverseWords = reverseArrayOfWords.join("")

    if(str == reverseWords) {
       return("true");
    }

    else {
       return("false");
    }
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("words"));
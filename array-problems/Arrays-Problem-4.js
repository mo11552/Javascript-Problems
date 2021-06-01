/*Write a JavaScript program to remove duplicate items from an array 
Step 1: Make an array called numberArray.
Step 2: Make a new array called newArray by using the set constructor on numberArray.
*/

var numberArray = [1,2,2,4,5,4,7,8,7,3,6];
var newArray = [...new Set(numberArray)];
console.log(newArray);
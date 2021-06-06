/*Write a JavaScript program to remove duplicate items from an array 
Step 1: Make an function called getNewArray.
Step 2: Make a variable with a empty array called numberArray 
Step 3: Make a for loop of the array.
Step 4: Add a indexOf of the array to see if the numbers in the array match the index.
Step 5: Push in the the looped array 
Step 6: return numberArray.
Step 7: Add a variable called numbers with the array of numbers.
Step 8: Have the variable newArray equal to the looped array of numbers.
Step 9: Log in the newArray.
*/

function getNewArray(array) {
        var numberArray = [];
        
        for(i=0; i < array.length; i++) {
            if(numberArray.indexOf(array[i]) === -1) {
                numberArray.push(array[i]);
            }
        }
        return numberArray;
    }
    
    var numbers = [1,2,2,4,5,4,7,8,7,3,6];
    var newArray = getNewArray(numbers);
    console.log(newArray); 
/*Write a JavaScript program to compute the sum of an array of integers.*/

var listOfIntegers = [1,3,4,5,6],
    s = 0;
  for(i = 0; i < listOfIntegers.length; i++) {
    s += listOfIntegers[i];
}
console.log(s);
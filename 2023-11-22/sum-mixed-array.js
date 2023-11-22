/* 
Sum Mixed Array
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.

console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

https://www.codewars.com/kata/57eaeb9578748ff92a000009

Make sure you understand these before taking a look at the question:
Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) Number(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
*/

const sumMix = (arr) => {
    return arr.reduce((acc, curr) => acc + +curr, 0);
};

console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);

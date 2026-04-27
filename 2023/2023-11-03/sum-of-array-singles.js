/* 
Sum of Array singles

You will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
Your task will be to return the sum of the numbers that occur only once. 
For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. 
Every other number occurs twice.

sumOfArraySingles([4,5,7,5,4,8]),15)
sumOfArraySingles([9, 10, 19, 13, 19, 13]),19)
sumOfArraySingles([16, 0, 11, 4, 8, 16, 0, 11]),12)
sumOfArraySingles([5, 17, 18, 11, 13, 18, 11, 13]),22)
sumOfArraySingles([5, 10, 19, 13, 10, 13]),24)

https://www.codewars.com/kata/59f11118a5e129e591000134
*/
const sumOfArraySingles = (arr) => {
    return arr
        .filter((n) => arr.indexOf(n) === arr.lastIndexOf(n))
        .reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfArraySingles([4, 5, 7, 5, 4, 8]), 15);
console.log(sumOfArraySingles([9, 10, 19, 13, 19, 13]), 19);
console.log(sumOfArraySingles([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(sumOfArraySingles([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(sumOfArraySingles([5, 10, 19, 13, 10, 13]), 24);

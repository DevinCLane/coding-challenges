/* 

Sum of Array singles

You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once. For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)

https://www.codewars.com/kata/59f11118a5e129e591000134
*/
// get the numbers that occur once
// add them together

// create a set from the array
// add up the elements of the set (need to convert back into an array to use reduce?), loop over the set?
// if the element === lastindexof
/**
 *
 * @param {number[]} arr - input array of integers
 * @returns {number} - sum of the single occuring numbers in the input array
 */
function sumOfArraySingles(arr) {
    let sum = 0;
    for (const num of arr) {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            sum += num;
        }
    }
    return sum;
}

console.log(sumOfArraySingles([4, 5, 7, 5, 4, 8]), 15);
console.log(sumOfArraySingles([9, 10, 19, 13, 19, 13]), 19);
console.log(sumOfArraySingles([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(sumOfArraySingles([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(sumOfArraySingles([5, 10, 19, 13, 10, 13]), 24);

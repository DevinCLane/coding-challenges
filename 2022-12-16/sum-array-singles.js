/* 
Sum of Array singles

You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once. For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)

https://www.codewars.com/kata/59f11118a5e129e591000134

Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 
Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 
indexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 
lastIndexOf(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
*/

const sumArraySingles = arr => {
    // obtain values that occur only once
    // filter the array and ask is this element the same as the lastindex of this element? then add that array
    return arr.filter((value, index, array) => {
        return array.indexOf(value) === array.lastIndexOf(value)
    })
    .reduce((acc, curr) => acc + curr, 0)
}

console.log(sumArraySingles([4,5,7,5,4,8]),15)
console.log(sumArraySingles([9, 10, 19, 13, 19, 13]),19)
console.log(sumArraySingles([16, 0, 11, 4, 8, 16, 0, 11]),12)
console.log(sumArraySingles([5, 17, 18, 11, 13, 18, 11, 13]),22)
console.log(sumArraySingles([5, 10, 19, 13, 10, 13]),24)
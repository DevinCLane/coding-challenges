/* 
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

e.g.,
repeats([4,5,7,5,4,8]),15) 
repeats([9, 10, 19, 13, 19, 13]),19) 
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12) 
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22) 
repeats([5, 10, 19, 13, 10, 13]),24)
*/

const repeats = arr => {
    // numbers that only occur once
    const onceNums = []
    for (const i of arr) {
        // find the two numbers that occur only once
        // indexOf(i) === lastIndexOf(i) => a number that only occurs once
        if (arr.indexOf(i) === arr.lastIndexOf(i)) {
            onceNums.push(i)
        }
    }
    // onceNums.reduce => a + c 
    // add up those numbers
    // return the result
    return onceNums.reduce((a, c) => a + c, 0)
}

console.log(repeats([4,5,7,5,4,8]),15) 
console.log(repeats([9, 10, 19, 13, 19, 13]),19) 
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12) 
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22) 
console.log(repeats([5, 10, 19, 13, 10, 13]),24)
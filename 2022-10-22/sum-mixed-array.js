/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number. 
e.g.,
sumMix([9, 3, '7', '3']), 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41

https://www.codewars.com/kata/57eaeb9578748ff92a000009
*/

const sumMix = arr => {
    return arr.reduce((a, c) => a + Number(c), 0)
}

const sumMix2 = arr => {
    let sum = 0;
    for (const i of arr) {
        sum += +i
    }
    return sum
}

console.log(sumMix([9, 3, '7', '3']), 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)

console.log(sumMix2([9, 3, '7', '3']), 22)
console.log(sumMix2(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumMix2(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41)

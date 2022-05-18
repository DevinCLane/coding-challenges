/* 
https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

/* 
My notes:
Parameters: Array with strings and numbers
Returns: a number which is the sum of the values of all the array members as if they were all numbers
example: [9, 3, '7', '3'] => 22
*/

// with a for loop
const sumMix = array => {
    // convert every array element into a number
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += +array[i] 
    }
    return sum;
    // sum all the numbers
    // return the result
}

// with reduce
const sumMixReduce = array => {
    return array.reduce((acc, c) => +acc + +c, 0)
}

// with map and reduce
const sumMixMapReduce = array => {
    return array.map(ele => +ele).reduce((acc, c) => acc + c, 0)
}


// test cases
console.log(sumMixReduce([9, 3, '7', '3']), 22);
console.log(sumMixReduce(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMixReduce(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
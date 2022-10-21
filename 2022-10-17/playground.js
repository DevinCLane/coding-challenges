/* 
Given an array of integers, how would you add certain indices and not others.

Let's say you want to only add the odd numbers
*/

// Give me every odd number from 1 to 100


// integers only , no floated values
// positives only
// always 1 to 100
// push it to a new array

const oddNumbers = () => {
    let answer = [];
    // create a loop
    for (let i = 1; i <= 100; i += 2) {
        answer.push(i)
    }
    return answer;
    // push the number to the array
    // add 2
    // push the number to the array
}

// console.log(oddNumbers(), "1, 3, 5, 7, etc.")


// what if we we had an array of numbers, and we only wanted to add up the odd indices?


const addOddIndices = arr => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            result += arr[i]
        }
    }    
    return result;
}

console.log(addOddIndices([1, 10, 14, 22, 99, 19]), 51)
/* 
Lost number in sequence

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
Example:
The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.
Note: N may be 1 or less (in the latter case, the first array will be []).

findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion') 
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion') 
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

https://www.codewars.com/kata/595aa94353e43a8746000120
*/

const findDeletedNumber = (starting, mixed) => {
    // set from mixed
    // filter starting and only pass through that which isn't in mixed
    const mixedSet = new Set(mixed)
    return starting.filter(value => !mixedSet.has(value))[0] || 0
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion') 
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion') 
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// brute force / regular for loop

const findDeletedNumber2 = (starting, mixed) => {
    if (starting.length === mixed.length) {
        return 0
    }
    mixed.sort((a, b) => a - b)
    for (let i = 0; i < starting.length; i++) {
        if (starting[i] !== mixed[i]) {
            return starting[i]
        }
    }
    return 0
}

console.log(findDeletedNumber2([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion') 
console.log(findDeletedNumber2([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion') 
console.log(findDeletedNumber2([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// summing the two values of the arrays

const findDeletedNumber3 = (starting, mixed) => {
    const startingSum = starting.reduce((acc, curr) => acc + curr, 0)
    const mixedSum = mixed.reduce((acc, curr) => acc + curr, 0)
    return startingSum - mixedSum
}

console.log(findDeletedNumber3([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion') 
console.log(findDeletedNumber3([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion') 
console.log(findDeletedNumber3([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
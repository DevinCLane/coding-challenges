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
    // edge cases: if the array is empty return 0;
    // if there's no deleted number, return 0
    // sort mixed
    // compare to see if something is missing, return missing value
    mixed.sort((a, b) => a - b)
    for (let i = 0; i < starting.length; ++i) {
        if (starting[i] !== mixed[i]) {
            return starting[i];
        }
    }
    return 0;
}

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion') 
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion') 
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// what if instead we compare the added values of the two arrays?
// if we add the two arrays, then subtract `starting` - `mixed`, we'll end up with the missing number
// don't forget to check first for the edge case that there's nothing removed

const findDeletedNumber2 = (starting, mixed) => {
    if (starting.length === mixed.length) {
        return 0
    }
    const startingSum = starting.reduce((acc, curr) => acc + curr, 0)
    const mixedSum = mixed.reduce((acc, curr) => acc + curr, 0)
    return startingSum - mixedSum
}

console.log(findDeletedNumber2([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion') 
console.log(findDeletedNumber2([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion') 
console.log(findDeletedNumber2([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// what if we used filter instead?
// we can create a new array with our answer by using filter on `starting` and ask what element inside mixed doesn't exist (indexOf === -1)

const findDeletedNumber3 = (starting, mixed) => {
    // very pithy, perhaps less readable.
    // make a new array with filter on `starting`, and inside each element of starting ask,
    // if the indexOf this element within `mixed` === -1 (which means it doesn't exist), add it to our new array
    // then access the array [0] since there should be only one
    // use the || or operator to return 0 if nothing had been removed.
    return starting.filter(element => mixed.indexOf(element) === -1)[0] || 0
}

console.log(findDeletedNumber3([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion') 
console.log(findDeletedNumber3([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion') 
console.log(findDeletedNumber3([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
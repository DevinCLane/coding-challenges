/* 
https://www.codewars.com/kata/59e66e48fc3c499ec5000103

Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
*/

const solve = array => {
    const arraySizeArray = []
    // use a loop to get to each array
    for (const sub of array) {
        // count unique elements in each array
        // use a set to count unique elements in each array
        const set = new Set(sub)
        const arraySize = set.size;
        arraySizeArray.push(arraySize)
    }
    // multiply that number
    return arraySizeArray.reduce((a, c) => a * c, 1)
}

console.log(solve([[1,2],[4],[5,6]]),4)
console.log(solve([[1,2],[4,4],[5,6,6]]),4)
console.log(solve([[1,2],[3,4],[5,6]]),8)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

// notes from 2022-10-25

/* 
- multiply the different possibilities together.
- find the unique numbers in each array
- multiple each unique number by itself
- we are taking in an array of arrays
- will there ever be an empty array, not numbers, strings, booleans?
- clarify we will always have arrays, no empty sub arrays
- what's unique about this? the subarrays will sometimes have duplicates.
- we don't want to include the duplicates in the possible combinations
- we have to remove the duplicates
- what are we returning? a number that is the unique number of combinations
- a set gives us unique values

*/


function solve2(arr) {
    // map over each member of the array
    // create a new set for each array, this removes any duplicates
    // use the size property of set to show the number of items in the sub array (similar to array.length)
    // use reduce to multiply each sub array to give the result.
    return arr.map(sA => new Set(sA).size).reduce((a, c) => a * c, 1)
}

// one liner
// pass in the array
// reduce, take the accumulation, multiply this by the size of the Set subarray
const solve3 = arr => arr.reduce((a, c) => a * new Set(c).size, 1)

// not a ton of Q&A afterward, a few bullet points:
// if asked for salary expectectation, respond with "fair market rate for a developer of my experience". if they persist, ask "what have you budgeted for the role"
// put the university experience on the bottom of your resume
// end an interview saying you're excited about the role
// 
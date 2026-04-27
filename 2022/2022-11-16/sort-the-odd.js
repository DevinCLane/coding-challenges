/* 
Task

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

// first pass
const sortOdds = arr => {
    // create new array with all odds
    const odds = []
    for (const i of arr) {
        if (i % 2 !== 0) {
            odds.push(i)
        }
    }
    odds.sort((a, b) => a - b)
    for (const i of arr) {
        if (i % 2 !== 0) {
            // if we have an odd, remove it, add in from the sorted odd list
            arr.splice(arr[i], 1, odds.shift())
        } 
    }
    return arr;
}

console.log(sortOdds([7, 1]), [1, 7])
console.log(sortOdds([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4])
console.log(sortOdds([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0])

// cleaning things up a bit
const sortOdds2 = arr => {
    // use filter to get only odds, then sort in descending order.
    // This way we can later use pop, which is more efficient than shift.
    const odds = arr.filter(n => n % 2 !== 0).sort((a, b) => b - a)
    return arr.map(n => n % 2 === 0 ? n : odds.pop())
}

console.log(sortOdds2([7, 1]), [1, 7])
console.log(sortOdds2([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4])
console.log(sortOdds2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0])
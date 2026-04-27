/* 
Sort by odd
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
*/

const sortByOdd = arr => {
    // find the odds, put them in an array
    // map over the original array, if it's even, pass it through, it it's odd, pull from the odds array
    // sort the odds in descending order so that we can use pop instead of shift because it's more efficient.
    const odds = arr.filter(value => value % 2 !== 0).sort();
    return arr.map(value => value % 2 === 0 ? value : odds.pop())
}

console.log(sortByOdd([7, 1]), [1, 7])
console.log(sortByOdd([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4])
console.log(sortByOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0])

const sortByOdd2 = arr => {
    const odds = arr.filter(value => value % 2 !== 0).sort((a, b) => b - a);
    return arr.map(value => value % 2 === 0 ? value : odds.pop())
}

console.log(sortByOdd2([7, 1]), [1, 7])
console.log(sortByOdd2([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4])
console.log(sortByOdd2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0])
console.log(sortByOdd2([7, 8, 9, 6, 3, 4, 1, 2, 5, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0])
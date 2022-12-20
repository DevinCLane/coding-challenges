/* 
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
*/

// const sortTheOdd = arr => {
// // filter, then sort
// // this doesn't work. sorts the odds but pushes them to the front of the array;
//     return arr.sort((a, b) => {
//         if (a % 2 !== 0) {
//             return a - b;
//         }
//     })
// }

const sortTheOdd = arr => {
    const odds = arr.filter((value) => value % 2 !== 0).sort((a, b) => b - a)
    return arr.map(value => value % 2 === 0 ? value : odds.pop())
}

console.log(sortTheOdd([7, 1]), [1, 7])
console.log(sortTheOdd([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4])
console.log(sortTheOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [1, 8, 3, 6, 5, 4, 7, 2, 9, 0])
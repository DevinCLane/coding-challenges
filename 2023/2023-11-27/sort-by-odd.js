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

const sortByOdd = (arr) => {
    // create sorted odds array in reverse order using filter
    // map over original array: if it's even, pass it through, if it's odd pop off from the odds array
    const oddsSorted = arr
        .filter((value) => value % 2 !== 0)
        .sort((a, b) => b - a);
    return arr.map((value) => (value % 2 === 0 ? value : oddsSorted.pop()));
};

console.log(sortByOdd([7, 1]), [1, 7]);
console.log(sortByOdd([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]);
console.log(
    sortByOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
    [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
);

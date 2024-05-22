/* 
Average length repeat

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1
*/

/**
 *
 * @param {Array} arr
 * @returns {Array}
 */

const averageRepeat = (arr) => {
    // get the average length of each element of Array
    // repeat the length of each element
    // creating a new array => map
    // getting the average => reduce
    const averageLength = Math.round(arr.join("").length / arr.length);
    console.log(averageLength);
    return arr.map((value) => value[0].repeat(averageLength));
};

console.log(averageRepeat(["u", "y"]), ["u", "y"]); // average length is 1
console.log(averageRepeat(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"]); // average length is 3
console.log(averageRepeat(["aa", "bb", "ddd", "eee"]), [
    "aaa",
    "bbb",
    "ddd",
    "eee",
]); // average length is 2.5 round up to 3

/* 
Average length repeat

// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1
*/

const averageLengthRepeat = (arr) => {
    // get average length of the elements in the array
    // repeat the elements in the array to that number
    // count the number of elements in each string, add them up, divide by the number of elements in the array
    // use this number to repeat the string in the original array
    const average = Math.round(
        // optimization: const avgLength = Math.round(arr.join('').length / arr.length)
        arr.reduce((acc, curr) => acc + curr.length, 0) / arr.length
    );
    return arr.map((value) => value[0].repeat(average));
};

console.log(averageLengthRepeat(["u", "y"]), ["u", "y"]); // average length is 1
console.log(averageLengthRepeat(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"]); // average length is 3
console.log(averageLengthRepeat(["aa", "bb", "ddd", "eee"]), [
    "aaa",
    "bbb",
    "ddd",
    "eee",
]); // average length is 2.5 round up to 3

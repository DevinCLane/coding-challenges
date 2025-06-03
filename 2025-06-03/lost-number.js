/* 
Lost number in sequence

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
Example:
The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.
Note: N may be 1 or less (in the latter case, the first array will be []).

console.log(lostNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
console.log(lostNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
console.log(lostNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

https://www.codewars.com/kata/595aa94353e43a8746000120
*/

// add up starting and add up mixed
// subtract starting sum from mixed sum

/**
 *
 * @param {number[]} arr
 * @returns {number}
 */
const sumArr = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

/**
 * time: O(n) - traverse both arrays once to sum them
 * space: O(1) - only store the sum values
 *
 * tradeoffs:
 * pros: simple
 * cons: doesn't work if array has duplicate numbers
 * @param {number[]} starting
 * @param {number[]} mixed
 * @returns {number}
 */
const lostNumber = (starting, mixed) => {
    if (starting.length === mixed.length) return 0;
    return sumArr(starting) - sumArr(mixed);
};

console.log(lostNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, "Deletion");
console.log(
    lostNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
    5,
    "Deletion"
);
console.log(
    lostNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
    0,
    "No deletion"
);

/**
 * time: O(n log n) - because of sorting
 * space: O(1)
 *
 * @param {number[]} starting
 * @param {number[]} mixed
 * @returns {number}
 */
const lostNumber2 = (starting, mixed) => {
    mixed.sort((a, b) => a - b);
    for (let i = 0; i < starting.length; i++) {
        if (starting[i] !== mixed[i]) {
            return starting[i];
        }
    }
    return 0;
};

console.log(lostNumber2([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, "Deletion");
console.log(
    lostNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
    5,
    "Deletion"
);
console.log(
    lostNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
    0,
    "No deletion"
);

/**
 * time: O(n^2) because of indexOf inside filter
 * space: O(1) since filter result isn't stored
 * elegant but inefficient
 *
 * @param {number[]} starting
 * @param {number[]} mixed
 * @returns {number}
 */
const lostNumber3 = (starting, mixed) => {
    return starting.filter((el) => mixed.indexOf(el) === -1)[0] ?? 0;
};

console.log(lostNumber3([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, "Deletion");
console.log(
    lostNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
    5,
    "Deletion"
);
console.log(
    lostNumber3([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
    0,
    "No deletion"
);

/**
 * time: O(n)
 * space: O(n)
 *
 * constant time lookups
 *
 * @param {number[]} starting
 * @param {number[]} mixed
 * @returns {number}
 */
const lostNumber4 = (starting, mixed) => {
    if (starting.length === mixed.length) return 0;
    const mixedSet = new Set(mixed);
    return starting.find((num) => !mixedSet.has(num)) ?? 0;
};

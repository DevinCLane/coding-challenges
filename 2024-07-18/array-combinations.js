/* 

Array combinations
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
From: https://www.codewars.com/kata/59e66e48fc3c499ec5000103
Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
Set (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

*/
const arrayCombinations = (arr) => {
    return arr.reduce((acc, curr) => acc * new Set(curr).size, 1);
};
console.log(arrayCombinations([[1, 2], [4], [5, 6]]), 4);
console.log(
    arrayCombinations([
        [1, 2],
        [4, 4],
        [5, 6, 6],
    ]),
    4
);
console.log(
    arrayCombinations([
        [1, 2],
        [3, 4],
        [5, 6],
    ]),
    8
);
console.log(
    arrayCombinations([
        [1, 2, 3],
        [3, 4, 6, 6, 7],
        [8, 9, 10, 12, 5, 6],
    ]),
    72
);

// looping for readability

function arrayCombinations2(arr) {
    let result = 1;
    for (const sub of arr) {
        result *= new Set(sub).size;
    }
    return result;
}

console.log(arrayCombinations2([[1, 2], [4], [5, 6]]), 4);
console.log(
    arrayCombinations2([
        [1, 2],
        [4, 4],
        [5, 6, 6],
    ]),
    4
);
console.log(
    arrayCombinations2([
        [1, 2],
        [3, 4],
        [5, 6],
    ]),
    8
);
console.log(
    arrayCombinations2([
        [1, 2, 3],
        [3, 4, 6, 6, 7],
        [8, 9, 10, 12, 5, 6],
    ]),
    72
);

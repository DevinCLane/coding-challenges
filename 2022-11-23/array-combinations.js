/* 
Array combinations
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

arrayCombinations([[1,2],[4],[5,6]]),4)
arrayCombinations([[1,2],[4,4],[5,6,6]]),4)
arrayCombinations([[1,2],[3,4],[5,6]]),8)
arrayCombinations([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)
*/

const arrayCombinations = arr => {
    let result = 1;
    for (const sub of arr) {
        result *= new Set(sub).size
    }
    return result;
    // take a set of each array
    // multiply each set size together
}

console.log(arrayCombinations([[1,2],[4],[5,6]]),4)
console.log(arrayCombinations([[1,2],[4,4],[5,6,6]]),4)
console.log(arrayCombinations([[1,2],[3,4],[5,6]]),8)
console.log(arrayCombinations([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

/* 
Jewels and stones

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
 
Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
 
Constraints:
1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
https://leetcode.com/problems/jewels-and-stones/
*/

/**
 *
 * @param {string} jewels - the type of stones that are jewels
 * @param {string} stones - all the stones that we have
 * @returns {number} - the number of stones that are jewels (the number of jewels that we have)
 */
const jewelsAndStones = (jewels, stones) => {
    // create a set of jewels (this gives us quick lookup)
    // reduce on stones and say acc + stonesset.has(current) (if this is false it will equate to zero)
    // stonesset.has(current) ? ++acc : acc
    const jewelsSet = new Set(jewels);
    return stones.split("").reduce((acc, curr) => acc + jewelsSet.has(curr), 0);
};

console.log(jewelsAndStones("aA", "aAAbbbb"), 3);
console.log(jewelsAndStones("z", "ZZ"), 0);

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
 * @param {string} jewels
 * @param {string} stones
 * @returns {number}
 */

const jewelsAndStones = (jewels, stones) => {
    const stoneMap = {};
    let jewelResult = 0;

    // create the hash map of every stone and how many we have
    for (const stone of stones) {
        stoneMap[stone] = ++stoneMap[stone] || 1;
    }

    // loop over the jewels and ask: is this jewel inside my hashmap of stones?
    // if so, take the number of jewels that we have and add it to my resulting number of jewels
    for (const jewel of jewels) {
        if (stoneMap[jewel]) {
            jewelResult += stoneMap[jewel];
        }
    }
    return jewelResult;
};

console.log(jewelsAndStones("aA", "aAAbbbb"), 3);
console.log(jewelsAndStones("z", "ZZ"), 0);
console.log(jewelsAndStones("B", "aaabbB"), 1);
console.log(jewelsAndStones("B", "aaBBBbabbB"), 4);

const jewelsAndStones2 = (jewels, stones) => {
    const jewelsSet = new Set(jewels);

    return stones
        .split("")
        .reduce((acc, curr) => (jewelsSet.has(curr) ? ++acc : acc), 0);
};

console.log(jewelsAndStones2("aA", "aAAbbbb"), 3);
console.log(jewelsAndStones2("z", "ZZ"), 0);
console.log(jewelsAndStones2("B", "aaabbB"), 1);
console.log(jewelsAndStones2("B", "aaBBBbabbB"), 4);

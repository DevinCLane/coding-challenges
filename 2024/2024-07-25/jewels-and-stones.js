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

const jewelsAndStones = (jewels, stones) => {
    // create a hash map of jewels
    // check if this stone is in the jewels
    // if it is, increment
    const jewelsMap = {};
    let result = 0;
    // create a hash map of all the jewels
    for (const jewel of jewels) {
        jewelsMap[jewel] = jewelsMap[jewel] + 1 || 1;
    }

    // loop over the stones
    for (const stone of stones) {
        // look up if the stone is a jewel
        if (jewelsMap[stone]) {
            result++;
        }
    }
    return result;
};

console.log(jewelsAndStones("aA", "aAAbbb"), 3);
console.log(jewelsAndStones("z", "ZZ"), 0);

const jewelsAndStones2 = (jewels, stones) => {
    // create a set of the jewels (the duplicates don't matter)
    const jewelsSet = new Set(jewels);
    return stones.split("").reduce((acc, curr) => acc + jewelsSet.has(curr), 0);
    // or better written as => jewelsSet.has(curr) ? acc + 1 : acc
};

console.log(jewelsAndStones2("aA", "aAAbbb"), 3);
console.log(jewelsAndStones2("z", "ZZ"), 0);

/* 
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:

    1 <= jewels.length, stones.length <= 50
    jewels and stones consist of only English letters.
    All the characters of jewels are unique.

https://leetcode.com/problems/jewels-and-stones/
*/

const numJewelsInStones = (jewels, stones) => {
    // let result = 0;
    // this doesn't work 🥲
    // if (stones.includes(jewels)) {
    //     result++
    // }
    // return result;

    // check within stones for how many occurances of every letter within jewels, case sensitive
    // create an object with key value pairs listing every jewel letter
    // loop through stones, check each character position to see if it contains a jewel, if it does, add to a result variable


    // this was overly complicating matters 🥴
    // const jewelObj = {}
    // for (const letter of jewels) {
    //     if (jewelObj[letter]) {
    //         jewelObj[letter]++
    //     } else jewelObj[letter] = 1;
    // }
    // for (const letter of stones) {
    //     if (stones[letter])
    // }

    // create a set of the jewels (we don't need duplicates here)
    const jewelsSet = new Set(jewels);
    // searching through the string of stones, if the jewels set has the stone, add to accumulator, otherwise do nothing
    return stones.split('').reduce((acc, curr) => jewelsSet.has(curr) ? ++acc : acc, 0)
}

console.log(numJewelsInStones("aA", "aAAbbbb"), 3)
console.log(numJewelsInStones("z", "ZZ"), 0)
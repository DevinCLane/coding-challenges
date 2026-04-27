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
    // create a set from the jewels (the lookup time of a set is faster than an array)
    // use reduce to walk over the stones array and say, add the accumulator to the current, while asking the current: does the jewels set have this value? if it's true, it'll evaluate to 1, and we can add it to our accumulator
    const jewelsSet = new Set(jewels)
    return stones.split('').reduce((acc, curr) => acc + jewelsSet.has(curr), 0)
}

console.log(jewelsAndStones("aA", "gjggjsdajsdfjAjsdfja"), 3)
console.log(jewelsAndStones("zZ", "gjggjszdazjszdZfjAjsdfja"), 4)
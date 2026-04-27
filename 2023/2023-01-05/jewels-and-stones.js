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
*/

// brute force / naive solution
const jewelsAndStones = (stones, jewels) => {
    let result = 0
    for (const jewel of jewels) {
        if (stones.includes(jewel)) {
            result++
        }
    }
    return result;
}

console.log(jewelsAndStones('aA', 'aAAbbbb'), 3)
console.log(jewelsAndStones('z', 'ZZ'), 0)
console.log(jewelsAndStones('aBC', 'jweigajBjCbcC'), 4)

// using a hash map, perhaps lookup is faster here
const jewelsAndStones2 = (jewels, stones) => {
    let result = 0
    const stoneMap = {}
    for (const stone of stones) {
        stoneMap[stone] = stoneMap[stone] + 1 || 1
    }
    for (const jewel of jewels) {
        if (stoneMap[jewel]) {
            result += stoneMap[jewel]
        }
    }
    return result;
}

console.log(jewelsAndStones2('aA', 'aAAbbbb'), 3)
console.log(jewelsAndStones2('z', 'ZZ'), 0)
console.log(jewelsAndStones2('aBC', 'jweigajBjCbcC'), 4)

// using Set for improved efficiency

const jewelsAndStones3 = (jewels, stones) => {
    const jewelsSet = new Set(jewels)
    return [...stones].reduce((acc, curr) => jewelsSet.has(curr) ? ++acc : acc, 0)
}

console.log(jewelsAndStones3('aA', 'aAAbbbb'), 3)
console.log(jewelsAndStones3('z', 'ZZ'), 0)
console.log(jewelsAndStones3('aBC', 'jweigajBjCbcC'), 4)
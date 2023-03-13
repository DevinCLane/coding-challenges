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

// perhaps overcomplicated things
const jewelsAndStones = (jewels, stones) => {
    // hash map of stones
    // for each jewels, ask the map how many stones it has
    const stoneMap = {};
    let jewelCount = 0;
    for (const stone of stones) {
        stoneMap[stone] = ++stoneMap[stone] || 1;
    }

    for (const jewel of jewels) {
        if (stoneMap[jewel]) {
            jewelCount += stoneMap[jewel];
        }
    }
    return jewelCount;
};

/* 
for a
	ask if a is a jewel
		if it is, add to the count of jewels
	ask if a is a jewel
	ask if a is a jewel
	ask if A is a jewel
	ask if A is a jewel
*/

console.log(jewelsAndStones("aA", "aaaAA"), 5);
console.log(jewelsAndStones("z", "aaaAAzZ"), 1);
console.log(jewelsAndStones("dE", "aadDeEaAAzZ"), 2);

const jewelsAndStones2 = (jewels, stones) => {
    const jewelsSet = new Set(jewels);
    // could also be .reduce((acc, curr) => jewelsSet.has(curr) ? ++acc : acc, 0)
    return stones.split("").reduce((acc, curr) => acc + jewelsSet.has(curr), 0);
};

console.log(jewelsAndStones2("aA", "aaaAA"), 5);
console.log(jewelsAndStones2("z", "aaaAAzZ"), 1);
console.log(jewelsAndStones2("dE", "aadDeEaAAzZ"), 2);

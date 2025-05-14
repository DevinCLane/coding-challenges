/* 
49. Group Anagrams - Explanation
Problem Link
Description
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
Example 1:
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:
Input: strs = ["x"]

Output: [["x"]]
Example 3:
Input: strs = [""]

Output: [[""]]
Constraints:
1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
*/

function sortedStr(str) {
    // sort a string
    return str.split("").sort().join("");
}

function groupAnagrams(strs) {
    // create a map
    const result = new Map();
    for (const str of strs) {
        const sorted = sortedStr(str);
        // use the sorted string as the key
        // if that key is undefined, add an empty array
        if (!result.has(sorted)) {
            result.set(sorted, []);
        }
        // push the str into the array of its key
        result.get(sorted).push(str);
    }
    // return the values of the map as an array
    return Array.from(result.values());
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);
console.log(groupAnagrams(["x"]), [["x"]]);
console.log(groupAnagrams([""]), [[""]]);

function groupAnagrams2(strs) {
    const result = new Map();

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const char of str) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        const key = count.join("");
        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key).push(str);
    }
    return Array.from(result.values());
}

console.log(
    groupAnagrams2(["act", "pots", "tops", "cat", "stop", "hat"]),
    "expect:",
    [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]
);
console.log(groupAnagrams2(["x"]), [["x"]]);
console.log(groupAnagrams2([""]), [[""]]);
// this time use an empty array of 26 0s
// loop over the array of strs
// loop over a single str's chars
// increase the count of each character in the array using charcodeat
// use this as a key in the map
// if the key doesn't exist, add an empty array
// get that key, push into the array
// return array of the values of the map

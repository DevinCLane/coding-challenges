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

function sortStr(str) {
    return str.split("").sort().join("");
}

function groupAnagrams(strs) {
    // create a map
    const result = new Map();
    // loop over the strs arr
    for (const str of strs) {
        // sort the string
        const sortedStr = sortStr(str);
        // if this sorted string isn't in the map, add empty array
        if (!result.has(sortedStr)) {
            result.set(sortedStr, []);
        }
        // push this string into the array (using the sorted string as a key)
        result.get(sortedStr).push(str);
    }

    // return an array of the map values
    return Array.from(result.values());
}

console.log(
    groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]),
    "expect:",
    [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]
);
console.log(groupAnagrams(["x"]), [["x"]]);
console.log(groupAnagrams([""]), [[""]]);

// using an array that counts the ocurrences of each letter
function groupAnagrams2(strs) {
    // create a new map
    const result = new Map();
    // loop over strs
    for (const str of strs) {
        // create empty array with 26 0s
        const count = new Array(26).fill(0);
        // loop over the str
        for (const char of str) {
            // increment the count array using the charcodeat of the current letter - charcode of "a"
            count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        // turn this array into a string to use as the key
        const key = count.join(",");

        // if this key doesn't exist in the map, add it and an empty array
        if (!result.has(key)) {
            result.set(key, []);
        }
        // push the str to the array of the relevant key
        result.get(key).push(str);
    }
    // return an array of the keys of the map
    return Array.from(result.values());
}

console.log(
    groupAnagrams2(["act", "pots", "tops", "cat", "stop", "hat"]),
    "expect:",
    [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]
);
console.log(groupAnagrams2(["x"]), [["x"]]);
console.log(groupAnagrams2([""]), [[""]]);

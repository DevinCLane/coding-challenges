/* 
6: 
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

// find anagrams => sort alphabetically, then check if equal
// put similar anagrams into sub arrays
// use a hash map
// create a key which is the sorted string
// put them all into the hash map positions
// create an array of the hash maps
/**
 * time: O(n k log(k)) where n is the number of strings, and k is the max length of a string
 *  - sorting for each string costs O(k log k)
 *  - do this for all n strings
 * space: O(n k) only create one object where n is hte number of strings, and k is the max string length
 *  - hash map stores all strings once
 */
function groupAnagrams(strs: string[]) {
    const map: Record<string, string[]> = {};
    for (const str of strs) {
        const sorted = str.split("").sort().join("");
        // refactor:
        /* 
            map[sorted] ?? []
            map[sorted].push(str)
        */
        if (map[sorted] !== undefined) {
            map[sorted].push(str);
        } else {
            map[sorted] = [];
            map[sorted].push(str);
        }
    }
    return Object.values(map);
}

// console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), [
//     ["hat"],
//     ["act", "cat"],
//     ["stop", "pots", "tops"],
// ]);

// console.log(groupAnagrams(["x"]), [["x"]]);
// console.log(groupAnagrams([""]), [[""]]);

// another solution
// create empty array with 26 0s
// create a count for each word - signature
// do the signatures match? add to the array
// otherwise create a new array

/**
 * time: O(n k), where n is the number of strings, and k is the max string length
 *  - no sorting needed, counting chars is O(k)
 */
function groupAnagrams2(strs: string[]) {
    const map: Record<string, string[]> = {};
    for (const str of strs) {
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        const key = count.join("");
        console.log(key);
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
        console.log(map);
    }
    return Object.values(map);
}

console.log(groupAnagrams2(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);

// console.log(groupAnagrams2(["x"]), [["x"]]);
// console.log(groupAnagrams2([""]), [[""]]);

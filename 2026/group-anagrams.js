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

// find if anagram
// create a hash map
// if the anagram is in the hash map push
// otherwise create a new key in the hash map and push the value
// iterate over the object and return an array of its values
*/

function groupAnagrams(strs) {
    const map = {};
    for (const str of strs) {
        const key = str.split("").sort().join("");
        if (map[key] !== undefined) {
            map[key].push(str);
        } else {
            map[key] = [str];
        }
    }
    return Object.values(map);
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);

function groupAnagrams2(strs) {
    const map = {};
    for (const str of strs) {
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        const key = count.join(",");
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }
    return Object.values(map);
}

console.log(groupAnagrams2(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);

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

// sort the strings
// compare sorted strings, if true: anagram
function sortStr(str) {
    return str.split("").sort().join("");
}

/**
 * time complexity: O(n * k log k) where n is the number of strings, k is the max length of any string. (k log(k)) comes from sorting each string
 * space: O(n * k) to store the grouped anagrams
 *
 * this works well but it requires sorting each string which adds log k time complexity
 * @param {string[]} strs - the array of strings to group into anagrams
 * @returns {string[][]} - the array of arrays of sorted anagrams
 */
function groupAnagrams(strs) {
    // hash map, use sorted string as the key
    const map = new Map();

    for (const str of strs) {
        const sortedStr = sortStr(str);
        // if the sorted string isn't in the hash map, add empty array
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        // push the original string to the array in that key's position
        map.get(sortedStr).push(str);
    }
    // return an array of the values
    return Array.from(map.values());
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);
console.log(groupAnagrams(["x"]), [["x"]]);
console.log(groupAnagrams([""]), [[""]]);

/**
 * time: O (n * k) - where n is the number of strings, and k is the max length of any string
 * space: O(n * k) - to store the grouped anagrams
 * @param {string[]} strs - the array of strings to group into anagrams
 * @returns {string[][]} - the array of arrays of sorted anagrams
 */
function groupAnagrams2(strs) {
    const map = new Map();

    for (const str of strs) {
        // create an array of 26 0s
        const count = new Array(26).fill(0);
        for (const char of str) {
            // increment or decrement each letter in the array to create a "signature" of the anagram
            count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        // use this signature as a key in the hash map
        const key = count.join("");
        // if the hash map doesn't have this key, add it with an empty array as value
        if (!map.has(key)) {
            map.set(key, []);
        }
        // push the original string to the appropriate key in the hash map
        map.get(key).push(str);
    }
    // return an array of the values
    return Array.from(map.values());
}

console.log(groupAnagrams2(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);
console.log(groupAnagrams2(["x"]), [["x"]]);
console.log(groupAnagrams2([""]), [[""]]);

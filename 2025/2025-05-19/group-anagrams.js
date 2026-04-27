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

// sort the strings
function sortStr(str) {
    return str.split("").sort().join("");
}

function groupAnagrams(strs) {
    const result = new Map();
    // loop over the strings array
    for (const str of strs) {
        // sort the string
        const sortedStr = sortStr(str);

        // if the map doesn't have this key, add an empty array
        if (!result.has(sortedStr)) {
            result.set(sortedStr, []);
        }

        // use the sorted string as a key in a hash map
        // add the original string to the map, at the place of the sorted string key
        result.get(sortedStr).push(str);
    }

    // return an array of the results
    return Array.from(result.values());
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);
console.log(groupAnagrams(["x"]), [["x"]]);
console.log(groupAnagrams([""]), [[""]]);

// time complexity: O (n * k)
// where n in the number of strings in the input array
// and k is the length of the longest string
const groupAnagrams2 = (strs) => {
    const result = new Map();
    // create an array of 26 0s
    // increment the count for each character of the string
    for (const str of strs) {
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }
        // turn this into a string and use as a key
        const key = count.join(",");
        // if the hash map doesn't have this key, add an empty array
        if (!result.has(key)) {
            result.set(key, []);
        }
        // push the original string into the hash map at the place of its count signature
        result.get(key).push(str);
    }
    // return an array of results
    return Array.from(result.values());
};

console.log(groupAnagrams2(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);
console.log(groupAnagrams2(["x"]), [["x"]]);
console.log(groupAnagrams2([""]), [[""]]);

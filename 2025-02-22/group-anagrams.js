/* 
Group Anagrams

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

// anagram logic
// sort the strings then compare them
// take one item then loop, if any other item is the same, add it to the array
// move on once you get to the end

/**
 *
 * @param {string[]} strs
 * @returns {string[]}
 */
const groupAnagrams = (strs) => {
    // emtpy object to store the grouops of words
    const result = {};
    // loop over the array of strings
    for (const str of strs) {
        // sort each string
        const sortedStr = str.split("").sort().join("");
        // if its the first time seeing this word, create an empty array
        if (!result[sortedStr]) {
            result[sortedStr] = [];
        }
        // using the sorted string as a key, push the non sorted string into that array
        result[sortedStr].push(str);
    }
    // return the values of that object, which is the array of grouped anagrams
    return Object.values(result);
};

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);

console.log(groupAnagrams(["x"]), [["x"]]);
console.log(groupAnagrams([""]), [[""]]);

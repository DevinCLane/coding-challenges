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

// find all anagrams
// sort the strings
// put the equal ones into sub lists
// group them into sub lists

//time: O(n * k log k), where n in the number of strings and k is the max length of a string
// space: O(n * k)
const groupAnagrams = (strs) => {
    // empty object to store the groups of words
    const result = {};
    // loop over the array of strings
    for (const str of strs) {
        // sort each string
        const sortedStr = str.split("").sort().join("");
        // if it's the first time seeing this word, create an empty array
        if (result[sortedStr] === undefined) {
            result[sortedStr] = [];
        }
        // push the anagram to its array (there will be a matching anagram)
        result[sortedStr].push(str);
    }
    // return the values of that object, which is an array of grouped anagrams
    return Object.values(result);
};

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);

// time: O(n * k) where n in the number of strings and k is the max length of a string
// space: O(n * k)
const groupAnagrams2 = (strs) => {
    // store a result object
    const result = {};
    // loop over the array of strings
    for (const str of strs) {
        // create an array of 26 0s
        const count = new Array(26).fill(0);
        // loop over the characters of the string
        for (const char of str) {
            // add the counts of the characters for that string so you will have an array of numbers, with the indices representing the letters
            count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        }
        // join the array together as one large number to use this as the key in our arrays
        // so we will use the counts as the key, the value will be the string. the counts is like the signature that each anagram shares
        const key = count.join(",");
        // if it doesn't already exist, add an empty array
        if (result[key] === undefined) {
            result[key] = [];
        }
        // push the string to that key so we have key: 26 numbers representing the letters, and the value is the string
        result[key].push(str);
    }
    // return the array of arrays of the strings
    return Object.values(result);
};

console.log(groupAnagrams2(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);

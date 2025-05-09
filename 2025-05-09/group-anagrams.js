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

// string => sort => join, then those strings that are equal are anagrams

// create an object

// if the object doesn't the key of the sorted string, add an empty array

// push the original string to the array in the object position

function isAnagram(str) {
    return str.split("").sort().join("");
}

function groupAnagrams(strs) {
    const result = {};

    for (const str of strs) {
        const sortedStr = isAnagram(str);

        if (result[sortedStr] === undefined) {
            result[sortedStr] = [];
        }

        result[sortedStr].push(str);
    }

    return Object.values(result);
}

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);

function groupAnagrams2(strs) {
    const result = {};

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const char of str) {
            count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        const key = count.join("");

        if (result[key] === undefined) {
            result[key] = [];
        }

        result[key].push(str);
    }

    return Object.values(result);
}
console.log(groupAnagrams2(["act", "pots", "tops", "cat", "stop", "hat"]), [
    ["hat"],
    ["act", "cat"],
    ["stop", "pots", "tops"],
]);
// create an empty array of 26 characters
// get the char code at each char position - the char code of a
// you have an array of the count of each letter - this is the signature of the string
// use this as the key for the object
// if the key for that string is undefined, add an empty array
// push the result to the array
// return the values of the object

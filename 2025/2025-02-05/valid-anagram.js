/* 
Valid Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
Example 1:
Input: s = "racecar", t = "carrace"

Output: true
Example 2:
Input: s = "jar", t = "jam"

Output: false
Constraints:
s and t consist of lowercase English letters.
*/

/**
 *
 * @param {string} s - first string to analyze
 * @param {string} t - second string to analyze
 * @returns {boolean} - true/false if the strings are anagrams of each other
 */
const validAnagram = (s, t) => {
    // sort both strings
    // compare them directly
    // if they're the same, they're anagrams

    // if they aren't the same length they can't be anagrams
    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(validAnagram("racecar", "carrace"), true);
console.log(validAnagram("jar", "jam"), false);

/**
 *
 * @param {string} s - first string to analyze
 * @param {string} t - second string to analyze
 * @returns {boolean} - true/false if the strings are anagrams of each other
 */
const validAnagram2 = (s, t) => {
    // create a hash map counting the characters in each string
    // compare the hash maps
    // if they aren't the same in any position, it's false

    if (s.length !== t.length) return false;

    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = sMap[s[i]] + 1 || 1;
        tMap[t[i]] = tMap[t[i]] + 1 || 1;
    }

    for (const key in sMap) {
        if (sMap[key] !== tMap[key]) {
            return false;
        }
    }

    return true;
};

console.log(validAnagram2("racecar", "carrace"), true);
console.log(validAnagram2("jar", "jam"), false);

/**
 *
 * @param {string} s - first string to analyze
 * @param {string} t - second string to analyze
 * @returns {boolean} - true/false if the strings are anagrams of each other
 */
const validAnagram3 = (s, t) => {
    // create an array of 26 0s for each letter in the alphabet
    // loop over s, and increase the count of each letter (subtracting the char code for a to 0 index the numbers)
    // subtract the count of each letter for t
    // after the loop is done, use the every method to check if each element in the array is 0
    // if it is, it's true (that means there are the same number of characters)
    // if it's not, it's false
    // the benefit here is that the array will only ever be 26 characters long regardless of input string length (constant space of O(1)),
    // this uses less memory and is faster for very large strings

    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }

    return count.every((value) => value === 0);
};

console.log(validAnagram3("racecar", "carrace"), true);
console.log(validAnagram3("jar", "jam"), false);

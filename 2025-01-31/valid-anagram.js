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

// naive: sort, loop through both arrays, check that each item as the same index is the same
// create a hash map of the letters and frequency for the first word,
// then loop over the second word, subtracting the letters from the hash map

/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean} - are the two strings anagrams of each other?
 */
const isAnagram = (s, t) => {
    // input validation: if the lengths aren't the same, they can't be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // convert strings to lowercase
    s = s.toLowerCase();
    t = t.toLowerCase();

    const sSort = s.split("").sort().join("");
    const tSort = t.split("").sort().join("");
    return sSort === tSort;
};

console.log(isAnagram("racecar", "carrace"), true);
console.log(isAnagram("jar", "jam"), false);

/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean} - are the two strings anagrams of each other?
 */
const isAnagram2 = (s, t) => {
    // input validation: if the lengths aren't the same, they can't be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // convert strings to lowercase
    s = s.toLowerCase();
    t = t.toLowerCase();

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

console.log(isAnagram2("racecar", "carrace"), true);
console.log(isAnagram2("jar", "jam"), false);

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram3 = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    // convert strings to lowercase
    s = s.toLowerCase();
    t = t.toLowerCase();

    // fill an array with 26 0s for each letter in the alphabet
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        // increase the count of a particular letter that s has, subtract the count if t has it
        // 0index the array by subtracting the charcode of a
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    // if every value in the array has a count of 0, that means both strings have the same letters and frequency
    return count.every((val) => val === 0);
};

// benefit of the third approach is that it uses constant space O(1) because it's always 26 elements regardless of
// input string length. this would work faster for very large strings.

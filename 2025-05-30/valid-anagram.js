/* 
3: 
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

const sortStr = (str) => {
    return str.split("").sort().join("");
};

const compareLength = (s, t) => {
    return s.length === t.length;
};

// if the length's aren't the same, they aren't anagrams
// sort the strings
// return if the sorted strings are equal
/**
 * time complexity - O(n log n) where n is the length of string
 * space: O(n) where n is the length of the string. creating new arrays for the split operation
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram1 = (s, t) => {
    if (compareLength(s, t) === false) return false;
    return sortStr(s) === sortStr(t);
};

console.log(validAnagram1("racecar", "carrace"), true);
console.log(validAnagram1("jar", "jam"), false);

// hash map
// count ocurrences of each character
// loop over map
// if the key[value] in one map doesn't equal another, then false
// otherwise true

/**
 * time complexity: O(n) where n is the length of the string, single pass through each string
 * space: O(k) where k is the number of unique characters. worst case: k could be n if all unique characters
 *
 * more efficient than sorting
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram2 = (s, t) => {
    if (compareLength(s, t) === false) return false;
    const sMap = {};
    const tMap = {};
    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] ?? 0) + 1;
        tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;
    }

    for (const char in sMap) {
        if (sMap[char] !== tMap[char]) {
            return false;
        }
    }
    return true;
};

console.log(validAnagram2("racecar", "carrace"), true);
console.log(validAnagram2("jar", "jam"), false);

// create an empty array of 26 0s
// loop over string
// add charcode of current char - char code of a
// subtract it from the t string
// run .every on the array, and they should all equal 0
/**
 * time complexity: O(n) where n is the length of the string
 * space: O(1) fixed array size of 26 characters
 *
 * pros:
 * most space efficient solution
 * best solution for lowercase english letters
 * single pass through strings
 *
 * cons:
 * only works for lowercase english letters
 * less flexible for different character sets
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram3 = (s, t) => {
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
};

console.log(validAnagram3("racecar", "carrace"), true);
console.log(validAnagram3("jar", "jam"), false);

/**
 * time: O(n) where n is the length of the string
 * space: O(k) where k is number of unique characters
 *
 * pros: uses less space than the two hash map solution (only one hash map)
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram4 = (s, t) => {
    if (compareLength(s, t) === false) return false;
    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] ?? 0) + 1;
    }

    // if a character isn't is the t hash map it's false
    // subtract the character we've seen
    // next time around if the subtraction means the character is no longer in the hash map, return false
    for (const char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
};

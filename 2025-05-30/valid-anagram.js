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
 * time complexity - O(n * k log k) where n is the length of string
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
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram3 = (s, t) => {
    if (compareLength(s, t) === false) return false;
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
};

console.log(validAnagram3("racecar", "carrace"), true);
console.log(validAnagram3("jar", "jam"), false);

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
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram = (s, t) => {
    // sort the strings
    // compare them

    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(validAnagram("racecar", "carrace"), true);
console.log(validAnagram("jar", "jam"), false);

/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram2 = (s, t) => {
    if (s.length !== t.length) return false;

    // create hash map for the two strings
    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = sMap[s[i]] + 1 || 1;
        tMap[t[i]] = tMap[t[i]] + 1 || 1;
    }

    // cycle over the key/values of the hash maps
    for (const key in sMap) {
        // if they aren't equal it's false
        if (sMap[key] !== tMap[key]) {
            return false;
        }
    }
    // otherwise it's true
    return true;
};

console.log(validAnagram2("racecar", "carrace"), true);
console.log(validAnagram2("jar", "jam"), false);

/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram3 = (s, t) => {
    if (s.length !== t.length) return false;

    // create an empty array of 26 0s
    const count = new Array(26).fill(0);
    // loop over s length
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    // add the value of the char map at the current index for s - the char value of a
    // subtract the value of the char map at the current index for t- the char value of a
    // run the every method on the array, if each element is 0, it's true, otherwise it's false
    return count.every((value) => value === 0);
};

console.log(validAnagram3("racecar", "carrace"), true);
console.log(validAnagram3("jar", "jam"), false);

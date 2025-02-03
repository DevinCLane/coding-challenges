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
    // sanitize input
    // sort strings
    // check if equal
    return (
        s.toLowerCase().split("").sort().join("") ===
        t.toLowerCase().split("").sort().join("")
    );
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
    if (s.length !== t.length) {
        return false;
    }

    const sMap = {};
    const tMap = {};

    s = s.toLowerCase();
    t = t.toLowerCase();

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
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram3 = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    s = s.toLowerCase();
    t = t.toLowerCase();

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        // "a".charCodeAt(0) calls the method charCodeAt on the string "a" at the position 0 (which is the string "a")
        // this gets us the value of 97
        // this creates a mapping where the array has 26 counts, one for each letter
        // each letter's position is calulcated by the letter code - 97
        // this gives us its 0 based position in the alphabet
        // e.g. "a" (97) - 97 = 0 (first position)
        // e.g. "b" (98) - 97 = 1 (second position)
        // e.g. "z" (122) - 97 = 25 (26th position)
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
};

console.log(validAnagram3("racecar", "carrace"), true);
console.log(validAnagram3("jar", "jam"), false);

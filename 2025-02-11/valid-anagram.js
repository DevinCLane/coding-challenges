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
    // sort the strings, they should equal each other
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
    // hash maps
    // loop over the hash maps, each key should equal the other key

    if (s.length !== t.length) {
        return false;
    }

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
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
const validAnagram3 = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    // create an array of 26 0s for each lowercase letter
    const count = new Array(26).fill(0);

    // add and subtract the char values for each character
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    // run the every method on the array, each should equal 0
    // the benefit here is we use constant space as the array is always
    // 26 characters regardless of input string length
    return count.every((value) => value === 0);
};

console.log(validAnagram3("racecar", "carrace"), true);
console.log(validAnagram3("jar", "jam"), false);

/* 
03: 
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

function sortStr(str) {
    return str.split("").sort().join("");
}

function validAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return sortStr(s) === sortStr(t);
}

// console.log(validAnagram("racecar", "carrace"), true);
// console.log(validAnagram("jar", "jam"), false);

function validAnagram2(s, t) {
    const sMap = {};
    const tMap = {};

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] ?? 0) + 1;
        tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;
    }

    for (const char in sMap) {
        if (tMap[char] !== sMap[char]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram2("racecar", "carrace"), true);
console.log(validAnagram2("jar", "jam"), false);

function validAnagram3(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
        count[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    }
    console.log(count);

    return count.every((value) => value === 0);
}

console.log(validAnagram3("racecar", "carrace"), true);
console.log(validAnagram3("jar", "jam"), false);

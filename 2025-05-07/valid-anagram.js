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

function sortStr(str) {
    return str.split("").sort().join("");
}

function strLengthEquals(s, t) {
    return s.length === t.length;
}

function validAnagram(s, t) {
    strLengthEquals(s, t);
    // create an object
    // count up letter for s
    // decrement letter for t
    // if the object contains numbers higher than 1 it's false
    return sortStr(s) === sortStr(t);
}

console.log(validAnagram("racecar", "carrace"), true);
console.log(validAnagram("jar", "jam"), false);

function validAnagram2(s, t) {
    const sMap = {};
    const tMap = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] ?? 0) + 1;
        tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;
    }

    for (const key in sMap) {
        if (sMap[key] !== tMap[key]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram2("racecar", "carrace"), true);
console.log(validAnagram2("jar", "jam"), false);

function validAnagram3(s, t) {
    strLengthEquals(s, t);

    const count = new Array(26);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }

    return count.every((val) => val === 0);
}

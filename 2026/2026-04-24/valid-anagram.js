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

create a hash map
compare the hash maps

sort the strings
check if they are equal
*/

function sortStr(str) {
    return str.split("").sort().join("");
}

function validAnagram(s, t) {
    return sortStr(s) === sortStr(t);
}

// console.log(validAnagram("jar", "jam"), false);
// console.log(validAnagram("racecar", "carrace"), true);

function hashMapStr(str) {
    const map = {};
    for (const char of str) {
        map[char] = (map[char] ?? 0) + 1;
    }
    return map;
}

function validAnagram2(s, t) {
    const sMap = hashMapStr(s);
    const tMap = hashMapStr(t);
    for (const key in sMap) {
        if (sMap[key] !== tMap[key]) {
            return false;
        }
    }
    return true;
}
console.log(validAnagram2("jar", "jam"), false);
console.log(validAnagram2("racecar", "carrace"), true);

function validAnagram3(s, t) {
    // fill an array with 26 0s
    const count = new Array(26).fill(0);
    // loop over one of the strings
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
}

console.log(validAnagram3("jar", "jam"), false);
console.log(validAnagram3("racecar", "carrace"), true);

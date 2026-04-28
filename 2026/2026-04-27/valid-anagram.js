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

before doing anything if the strings aren't the same length, they aren't anagrams

sort the strings and compare

create a hash map of each word and its letter
map over the hash map and compare if each hash map has the same characters

create an empty array of 26 0s
use charcode at to count the occurrences of each character
add for one string
subtract for another
if the entire array === 0, then it's a match
*/

function sortStr(str) {
    return str.split("").sort().join("");
}

/* 
time: O (n log n) because of sorting
space: O(n)
*/
function validAnagram(s, t) {
    if (s.length !== t.length) return false;
    return sortStr(s) === sortStr(t);
}

console.log(validAnagram("racecar", "carrace"), true);
console.log(validAnagram("jar", "jam"), false);

/* 
time: O(n) length of the input string
space: O(k) where k is the number of unique characters
*/
function hashMapStr(str) {
    const map = {};
    for (const char of str) {
        map[char] = (map[char] ?? 0) + 1;
    }
    return map;
}

/* 
time O(n) 
space O(1) because the array size never grows
*/
function validAnagram2(s, t) {
    if (s.length !== t.length) return false;
    const sMap = hashMapStr(s);
    const tMap = hashMapStr(t);
    for (const char in sMap) {
        if (sMap[char] !== tMap[char]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram2("racecar", "carrace"), true);
console.log(validAnagram2("jar", "jam"), false);

function validAnagram3(s, t) {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
    }
    return count.every((val) => val === 0);
}

console.log(validAnagram3("racecar", "carrace"), true);
console.log(validAnagram3("jar", "jam"), false);

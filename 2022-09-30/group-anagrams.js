/* 
Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:
Input: strs = ["a"]
Output: [["a"]]
 
Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters. */

// empty hashmap
// spread operator into their own arrays, sort, store in new variable
// if the word is not in the hashmap, add to hashmap as empty array
// if it is, add to the appropriate array

const groupAnagrams = words => {
    const hashMap = {};
    for (const word of words) {
        let sortedWord = [...word].sort().join('');
        if (!hashMap[sortedWord]) {
            hashMap[sortedWord] = [];
        }
        hashMap[sortedWord].push(word);
    }
    return Object.values(hashMap);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
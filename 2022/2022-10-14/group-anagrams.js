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
strs[i] consists of lowercase English letters.
*/

// array of strings, lowercase English letters
// array of arrays, with anagrams sorted together

// check for empty string or array?
// sort the word 'ate' 'eat' 'tea' => 'aet'
// if the words are similar, push them to an array
// if they are not similar, push them to a new array

const groupAnagrams = strs => {
    const result = {};
    for (const word of strs) {
        const sortedWord = [...word].sort().join('');
        if (!result[sortedWord]) {
            result[sortedWord] = []
        }
        result[sortedWord].push(word);
    }
    return Object.values(result)
}

// result = []
// does this array have an array with the sorted word in it?
// if it does, push the word to that sorted array
// if it doesn't, create an array, and push the word to that array.
/* 
result = {
    word: [word, word, word],
    word2: [word2, word2, word2]
}

*/

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]), [["bat"],["nat","tan"],["ate","eat","tea"]])
console.log(groupAnagrams([""]), [""])
console.log(groupAnagrams(["a"]), ["a"])
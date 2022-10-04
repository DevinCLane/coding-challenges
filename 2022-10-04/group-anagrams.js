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

// get into each string, spread it into an array, sort the letters
// looping across each word, does it exist in our hash map? if so add it to the array, otherwise create a new array and add it there

const groupAnagrams = words => {
    // create a hash map to store our values
    const map = {};
    // loop through the array of words
    for (word of words) {
        // spread each word string into an array, sort it, join it back into a string, store it in variable called key. therefore each anagram will look the same ('eat' and 'tea' will both be 'aet')
        const key = [...word].sort().join('')
        // if the sorted word is not in our hash map, add an empty array
        if (!map[key]) {
            map[key] = [];
        }
        // push the original, non sorted word into the array
        map[key].push(word);
    }
    // return the values of the hash map object 
    return Object.values(map);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
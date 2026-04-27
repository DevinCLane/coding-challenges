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

/* 
For each word, count each letter
group the words with similar letter counts in the same array
*/

// tinkering around trying to count the number of words
const groupAnagrams = strs => {
    const hashMap = {};
    for (let i = 0; i < strs.length; i++) {
        let arr = strs[i].split('')
        for (let j = 0; i < arr.length; i++) {
            let current = arr[j];
            if (hashMap[current]) {
                hashMap[current]++
            } else {
                hashMap[current] = 1
            }
        }
    }
    return hashMap
}

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

const groupAnagrams2 = strs => {
    const hashMap = {};
    for (const word of strs) {
        // sort each word so that the similar anagrams look the same, that becomes our object key
        const key = [...word].sort().join('')
        console.log(key)
        // if we don't have this object key in our hashmap, create a new array. this is where we'll store our similar anagrams
        if (!hashMap[key]) {
            hashMap[key] = [];
        }
        // push the original word (unsorted) into the hashmap as the value, with the key being the sorted anagram so that we have similar anagrams in the same array
        hashMap[key].push(word)
    }
    return Object.values(hashMap)
}

console.log(groupAnagrams2(["eat","tea","tan","ate","nat","bat"]), [["bat"],["nat","tan"],["ate","eat","tea"]])
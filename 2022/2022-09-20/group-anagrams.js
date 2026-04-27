/* 
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
parameters: array of strings
return: array with subarray of grouped anagrams
*/

const groupAnagrams = strs => {
    // check if something is an anagram. if i sort both strings and they're equal, then they're anagrams
    // run this function on each element of the array using map
    const sorted = strs.map(element => {
        // for each string in the array, split into its own array, sort it, join it back into a string
        // e.g., "eat" becomes "aet"
        return element.split('').sort().join('')
    })
    // sort the array of strings alphabetically
    // e.g., [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ] 
    // becomes [ 'abt', 'aet', 'aet', 'aet', 'ant', 'ant' ]
    .sort()
    console.log(sorted)
    // now let's put similar items into their own arrays

    // make a set
    // the number of members of the set is the number of arrays
    // push each different group into a new arrayke
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

 

Constraints:

    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/* 
parameters: two strings
Return: true or false if t is an anagram of s
*/

const lowerCaseAndSort = str => {
    return str.toLowerCase().split('').sort().join();
}

const validAnagram = (s, t) => {
    // put the strings into lowercase
    // sort the two strings alphabetically
    // are they equal? true, otherwise false
    const sortedS = lowerCaseAndSort(s)
    const sortedT = lowerCaseAndSort(t)
    
    if (sortedS === sortedT) {
        return true
    } else return false;
}

console.log(validAnagram('anagram', 'nagaram'), true)
console.log(validAnagram('car', 'rat'), false)
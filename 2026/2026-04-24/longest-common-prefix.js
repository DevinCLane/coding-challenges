/* 
5: 
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
 
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.

flo
flo
flo

o doesn't match, slice the string if it doesn't match
*/

/* 
time: O(n^2)
*/
function longestCommonPrefix(strs) {
    // grab the first word as the prefix
    let prefix = strs[0];
    // loop over the prefix
    for (let i = 0; i < prefix.length; i++) {
        // for each letter in prefix, loop over the strs words, starting at the 1st index (skip 0 because that is our prefix)
        for (let j = 1; j < strs.length; j++) {
            // grab the word you're comparing to
            const word = strs[j];
            // if the i from prefix is the length of the word
            // or if the characters don't match
            if (i === word.length || prefix[i] !== word[i]) {
                // return by slicing from 0 to i
                return prefix.slice(0, i);
            }
        }
    }
    // otherwise return the prefix as the longest word
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

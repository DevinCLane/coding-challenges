/* 
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
*/

/**
 * find the longest common prefix between the strings in an input array
 * @param {string[]} strs - the input array of strings
 * @returns {string} - the longest common prefix between all strings
 */
const longestCommonPrefix = (strs) => {
    // set the first word as the longest common prefix
    let prefix = strs[0];
    // loop over strs
    for (let i = 0; i < strs.length; i++) {
        // set up an inner counter j
        let j = 0;
        // while j is less than the min of prefix length or string[i] length
        while (j < Math.min(prefix.length, strs[i].length)) {
            // if the letter doesn't equal the other letter, break
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            // otherwise increment j
            j++;
        }
        // finish this loop, slice prefix from 0 to j - this is how far you got
        prefix = prefix.slice(0, j);
    }
    // return the result
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

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
 *
 * @param {string[]} strs - the array of strings
 * @returns {string} - the longest common prefix of those strings
 */
const longestCommonPrefix = (strs) => {
    // set the first string as the prefix
    let prefix = strs[0];
    // loop
    for (let i = 1; i < strs.length; i++) {
        // set up inner loop j
        let j = 0;
        // run while j is less than the length of prefix or the string that you are on
        while (j < Math.min(prefix.length, strs[i].length)) {
            // if the two letters don't match, break
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            // otherwise increment j
            j++;
        }
        // how far j got is your prefix point - slice prefix from 0 to j
        prefix = prefix.slice(0, j);
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

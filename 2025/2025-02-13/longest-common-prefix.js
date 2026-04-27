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
 * @param {string[]} strs
 * @returns {string}
 */
const longestCommonPrefix = (strs) => {
    // set prefix as the first word in the array
    let prefix = strs[0];
    // loop over the array
    for (let i = 1; i < strs.length; i++) {
        // set up an inner variable j
        let j = 0;
        // while j is less than prefix and the inner word strs[i] length
        while (j < Math.min(prefix.length, strs[i].length)) {
            // if prefix[j] !== strs[i][j], it doesn't match
            if (prefix[j] !== strs[i][j]) {
                // break
                break;
            }
            // otherwise increment j
            j++;
        }
        // slice prefix from 0 to j -- this is how far we got before they didn't match
        prefix = prefix.slice(0, j);
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

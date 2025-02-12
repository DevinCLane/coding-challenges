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
 * @param {string[]} strs - input array of strings
 * @returns {string} - the longest common prefix of the strings
 */
const longestCommonPrefix = (strs) => {
    // take the first string as the longest common prefix
    let prefix = strs[0];
    // loop over the array
    // i starts at 1 because the first element of the array is already assigned to "prefix"
    for (let i = 1; i < strs.length; i++) {
        // set up a j loop variable
        let j = 0;
        while (j < Math.min(prefix.length, strs[i].length)) {
            // if the two characters don't match, break out of the loop
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            // otherwise increase j
            j++;
        }
        // return prefix slice from 0 to j (which is how far you made it before they didn't match)
        prefix = prefix.slice(0, j);
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

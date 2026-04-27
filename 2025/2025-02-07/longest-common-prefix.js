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

const longestCommonPrefix = (strs) => {
    // assume the prefix is the whole first string
    let prefix = strs[0];
    // loop starting at the 2nd string
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < Math.min(prefix.length, strs[i].length)) {
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            j++;
        }
        prefix = prefix.slice(0, j);
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

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
    // prefix is the full string
    let prefix = strs[0];
    // loop over strs
    for (let i = 1; i < strs.length; i++) {
        // set up j
        let j = 0;
        // while j is less than the prefix length or the length of any string we check
        while (j < Math.min(prefix.length, strs[i].length)) {
            // if the first letter of the strings don't match, break out of the loop
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            j++;
        }
        // slice the prefix from 0 up to j - this is how far you got until they didn't match
        prefix = prefix.slice(0, j);
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

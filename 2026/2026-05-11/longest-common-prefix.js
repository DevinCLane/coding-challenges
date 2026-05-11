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

f l o
f l o
f l i
*/

function longestCommonPrefix(strs) {
    let prefix = strs[0];
    for (let i = 0; i < prefix.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            const word = strs[j];
            if (word[i] !== prefix[i] || i === word.length) {
                prefix = prefix.slice(0, i);
            }
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

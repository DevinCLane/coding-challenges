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
*/

/* 
clarifying questions to ask:
- can input array be empty
- can any of the strings be empty
- will the strings only include ASCII or also unicode?
- should i optimize for space or time complexity
- how should i handle case sensitivity?
*/

/**
 * time: O(S) where S is the sum of all characters in all strings
 * space: O(1) extra space, not counting output string
 *
 * pros: more efficient when strings have very different lengths
 * potentially fewer slice operations
 *
 * @param {string[]} strs
 * @returns {string}
 */
const longestCommonPrefix = (strs) => {
    // take the first string as our prefix
    let prefix = strs[0];
    // start looping at the next character
    for (let i = 1; i < strs.length; i++) {
        // then loop within that string
        let j = 0;
        // as long as j is smaller than either prefix length or the length of the string we're comparing
        while (j < Math.min(prefix.length, strs[i].length)) {
            // if we find a mismatch in characters, break
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            j++;
        }
        // slice the prefix from 0 until where we found a mismatch
        prefix = prefix.slice(0, j);
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

// compare one character across all words at once
// this is the one to study
/**
 * time: O(S) where S is the min(len(prefix) * N) where
 * -len(prefix) is the length of the first prefix
 * -N is the number of strings in the array
 *
 * space: O(1) not counting output string
 *
 * pros: returns early as soon as any mismatch found
 * handles empty strings
 * @param {string[]} strs
 * @returns {string}
 */
const longestCommonPrefix2 = (strs) => {
    let prefix = strs[0];

    for (let i = 0; i < prefix.length; i++) {
        for (const word of strs) {
            if (i === word.length || word[i] !== prefix[i]) {
                return prefix.slice(0, i);
            }
        }
    }
    return prefix;
};

console.log(longestCommonPrefix2(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix2(["dog", "racecar", "car"]), "");

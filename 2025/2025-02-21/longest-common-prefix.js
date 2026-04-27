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
 *
 * "horizontal scanning"
 * shorten the prefix as we go: compare 1st word with second word,
 * and then shorten the prefix that doesn't match, move on
 * use this shortened prefix to compare to the next word
 * e.g. start with "flower"
 * "flower" ? "flow" => "flow"
 * "flow" ? "flight" => "fl"
 * ans: "fl"
 * @param {string[]} strs - the input array of strings
 * @returns {string} - the longest common prefix between all strings
 */
const longestCommonPrefix = (strs) => {
    // set the first word as the longest common prefix
    let prefix = strs[0];
    // loop over strs
    for (let i = 1; i < strs.length; i++) {
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

/**
 * find the longest common prefix between the strings in an input array
 *
 * "vertical scanning"
 * scan vertically across all words;
 * e.g., f f f - check first position across all words
 * l l l - second position across all words
 * o o i - doesn't match, stop here, return prefix
 *
 * @param {string[]} strs - the input array of strings
 * @returns {string} - the longest common prefix between all strings
 */
const longestCommonPrefix2 = (strs) => {
    // f f f
    // l l l
    // o o i - return here

    // set up the prefix variable as the first word
    let prefix = strs[0];

    // loop over the prefix
    for (let i = 0; i < prefix.length; i++) {
        // loop over the strs array
        for (const word of strs) {
            // if we reach the end of any word, that's the longest our prefix can be
            // or if the characters don't match, we hit the end of the common prefixes
            if (i === word.length || word[i] !== prefix[i]) {
                // return to stop processing
                return prefix.slice(0, i);
            }
        }
    }
    return prefix;
};

console.log(longestCommonPrefix2(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix2(["dog", "racecar", "car"]), "");

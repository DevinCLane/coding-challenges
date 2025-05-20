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

/**
 * Horizontal scanning
 *
 * @param {string[]} strs - the input array of strings
 * @returns {string} - the longest common prefix
 */
const longestCommonPrefix = (strs) => {
    // start by assuming the prefix is the whole first string
    let prefix = strs[0];

    // loop starting at the second string, loop over whole strings
    for (let i = 1; i < strs.length; i++) {
        // set up our second pointer to loop over the characters within a string
        let j = 0;

        // as long as j is less than the SMALLER of the prefix length, and the length of the current string
        // in other words, if j goes beyond prefix length, exit, or beyond length of current string exit
        while (j < Math.min(prefix.length, strs[i].length)) {
            // if the prefix at the current location doesn't equal the character of the current string
            if (prefix[j] !== strs[i][j]) {
                // break out of the loop
                break;
            }
            j++;
        }

        // when we finish, update the prefix variable with how far we got along in this word
        prefix = prefix.slice(0, j);

        // if prefix becomes empty, no need to continue
        if (prefix === "") return "";
    }
    // when we're done, return the prefix with how far we got
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

/**
 * find the longest common prefix by scanning vertically across all strings
 * in other word, search each string in the ith position
 * f f f - check first position across all words
 * l l l - second position across all words
 * o o i - doesn't match, stop here, return prefix
 *
 * @param {string[]} strs - the input array of strings
 * @returns {string} - the longest common prefix
 */
const longestCommonPrefix2 = (strs) => {
    // assume prefix is the entirety of the first sting
    let prefix = strs[0];
    // loop over the prefix
    for (let i = 0; i < prefix.length; i++) {
        // loop over each word in the strs array
        for (const word of strs) {
            // if we hit the end of the word
            // or if the character in the ith position doesn't match between the prefix and the word
            if (i === word.length || word[i] !== prefix[i]) {
                // update the prefix to be from 0 to this ith position
                prefix = prefix.slice(0, i);
            }
        }
    }
    // return the prefix when we're done
    return prefix;
};

console.log(longestCommonPrefix2(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix2(["dog", "racecar", "car"]), "");

// to study:

const longestCommonPrefix3 = (strs) => {
    if (strs.length === 0) return "";

    // Find minimum length string
    let minLen = Math.min(...strs.map((str) => str.length));

    let low = 0;
    let high = minLen;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return strs[0].slice(0, Math.floor((low + high) / 2));
};

// Helper function to check if length is valid for common prefix
const isCommonPrefix = (strs, len) => {
    const prefix = strs[0].slice(0, len);
    return strs.every((str) => str.startsWith(prefix));
};

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

choose the first word as the prefix
loop over the strs starting at index 1, until str.length
make a j variable to loop over the word
while loop: math.min between current word and the prefix
if the letter of each word does not match, break out of the loop
otherwise increment j
update prefix with the slice of the word for how far you made it
*/

function longestCommonPrefix(strs) {
    let prefix = strs[0];
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
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

/* 
check the first char of each word
check the 2nd char of each word
if they don't match, or we reached the end of a word
prefix updates to that index
*/
function longestCommonPrefix2(strs) {
    let prefix = strs[0];

    // loop over the single prefix word
    for (let i = 0; i < prefix.length; i++) {
        // loop over the strs array
        for (const word of strs) {
            if (i === word.length || prefix[i] !== word[i]) {
                prefix = prefix.slice(0, i);
            }
        }
    }
    return prefix;
}

console.log(longestCommonPrefix2(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix2(["dog", "racecar", "car"]), "");

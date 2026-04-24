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
strs[i] consists of only lowercase English letters if it is non-empty.5: 
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

start with the first word of strs as my prefix
loop over the strs array starting one word after the first
develop an inner loop for each word, while loop for whichever is smaller: prefix or that word in strs
if the letter of prefix and the letter of strs don't match, break out of the while loopp
update prefix to be sliced from 0 to that index

*/

/* 
scan the entirety of the chosen prefix against the entirety of the next word
f f
l l
o o
w w
e undefined
end, slice to flow

f f
l l
o i
end, slice to fl
*/
function longestCommonPrefix(strs) {
    let prefix = strs[0];
    console.log(`\n prefix is set as ${prefix}`);
    for (let i = 1; i < strs.length; i++) {
        console.log(`checking prefix: ${prefix} against strs word: ${strs[i]}`);
        let j = 0;
        while (j < Math.min(prefix.length, strs[i].length)) {
            console.log(
                `checking the jths spot of prefix: ${prefix[j]} against the jth spot of the ith word: ${strs[i][j]}`,
            );
            if (prefix[j] !== strs[i][j]) {
                break;
            }
            j++;
        }
        console.log(`${prefix[j]} doesn't match ${strs[i][j]}, slicing`);
        console.log(`${prefix}`);
        prefix = prefix.slice(0, j);
        console.log(`becomes: ${prefix}`);
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");
/* 
scan vertically across all words
f f f 
l l l
o o i
*/
function longestCommonPrefix2(strs) {
    let prefix = strs[0];
    for (let i = 0; i < prefix.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            const currWord = strs[j];
            if (i === currWord.length || currWord[i] !== prefix[i]) {
                return prefix.slice(0, i);
            }
        }
    }
    return prefix;
}

console.log(longestCommonPrefix2(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix2(["dog", "racecar", "car"]), "");

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

prefix variable that you keep adding to

loop over 
flo
flo
fli

i need to loop over one string
i need to check each one of those chars against the chars in the same position of each other string in strs

strs[i][j]

strs[i][j]

therefore go back one
*/

function longestCommonPrefix(strs) {
    let prefix = strs[0];
    console.log("\n starting function");
    console.log("prefix set as:", prefix);
    // if you grabbed the first item as the prefix, you don't need to compare it to itself
    for (let i = 1; i < strs.length; i++) {
        console.log(`comparing ${prefix} to ${strs[i]}`);
        let j = 0;
        while (j < Math.min(prefix.length, strs[i].length)) {
            console.log(`comparing ${prefix[j]} to ${strs[i][j]}`);
            if (prefix[j] !== strs[i][j]) {
                console.log(
                    `${prefix[j]} doesn't match ${strs[i][j]}, breaking out of the while loop`,
                );
                break;
            }
            j++;
        }
        console.log(`updating prefix: ${prefix} to be ${prefix.slice(0, j)}`);
        prefix = prefix.slice(0, j);
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "");

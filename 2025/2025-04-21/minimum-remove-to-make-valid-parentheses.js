/* 
1249. Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters.
Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
Formally, a parentheses string is valid if and only if:
It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 
Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
 
Constraints:
1 <= s.length <= 105
s[i] is either '(' , ')', or lowercase English letter.
*/

// function minimumRemove(str)
function minimumRemove(str) {
    // count = 0
    let count = 0;
    // result = []
    const result = [];
    // loop over str
    for (const char of str) {
        // if "("
        if (char === "(") {
            // result.push
            result.push(char);
            // count++
            count++;
            // if ")" && count > 0
        } else if (char === ")" && count > 0) {
            // result.push
            result.push(char);
            // count--
            count--;
            // if !== ")"
        } else if (char !== ")") {
            // result.push
            result.push(char);
        }
    }
    // remove surplus )
    // filtered = []
    const filtered = [];
    // loop right to left
    for (let i = result.length - 1; i >= 0; i--) {
        let current = result[i];
        if (current === "(" && count > 0) {
            count--;
        } else {
            filtered.push(current);
        }
    }
    return filtered.reverse().join("");
}

console.log(minimumRemove("lee(t(c)o)de)"), "lee(t(c)o)de");
console.log(minimumRemove("a)b(c)d"), "ab(c)d");
console.log(minimumRemove("))(("), "");

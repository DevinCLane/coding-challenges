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

function minimumRevove(str) {
    // result
    // count variable
    // loop over the string
    // if "("  count++
    // if ")" && count > 0 count--
    // if !== "(" add
    // if count < 0 return false

    // remove extra closing ")"
    const result = [];
    let count = 0;
    for (const char of str) {
        if (char === "(") {
            result.push(char);
            count++;
        } else if (char === ")" && count > 0) {
            result.push(char);
            count--;
        } else if (char !== ")") {
            result.push(char);
        }
    }

    const filtered = [];

    // filtered = []
    // loop in reverse
    // if "(" && count > 0
    // filtered.push
    // count--
    // filtered.reverse

    // remove extra opening "("
    for (let i = result.length - 1; i >= 0; i--) {
        const curr = result[i];
        if (curr === "(" && count > 0) {
            count--;
        } else {
            filtered.push(curr);
        }
    }
    return filtered.reverse().join("");
}

console.log(minimumRevove("lee(t(c)o)de)"), "lee(t(c)o)de");
console.log(minimumRevove("a)b(c)d"), "ab(c)d");
console.log(minimumRevove("))(("), "");

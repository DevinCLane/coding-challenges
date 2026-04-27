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

function minimumRemove(str) {
    const arr = str.split("");
    // result
    const result = [];
    // count
    let count = 0;
    // loop
    // first pass skip the extra closing parenthesis
    for (const str of arr) {
        // if "("
        if (str === "(") {
            // add to array
            result.push(str);
            // increment count
            count++;
            // if ")" and count > 0
        } else if (str === ")" && count > 0) {
            // add to array
            result.push(str);
            // count -= 1
            count--;
            // this would be a character
            // if it's a closing parenthesis and count > 0 wasn't true
            // so instead we say: if !== ")"
        } else if (str !== ")") {
            // add to array
            result.push(str);
        }
    }
    // filtered = []
    // remove extra open parenthesis
    // loop right to left
    const filtered = [];
    for (let i = result.length - 1; i >= 0; i--) {
        // if "(" and count > 0
        // skip it (don't push to filtered)
        // otherwise add the character to filtered
        if (result[i] === "(" && count > 0) {
            count--;
        } else {
            filtered.push(result[i]);
        }
    }
    return filtered.reverse().join("");
}

console.log(minimumRemove("lee(t(c)o)de)"), "lee(t(c)o)de");
console.log(minimumRemove("a)b(c)d"), "ab(c)d");
console.log(minimumRemove("))(("), "");

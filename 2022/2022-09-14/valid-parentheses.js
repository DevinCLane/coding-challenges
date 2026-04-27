/* 
Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false
*/

const validParentheses = str => {
    const hash = {
        "]": "[",
        ")": "(",
        "}": "{"
    }
    const stack = [];

    if (!str) return false;

    for (let i = 0; i < str.length; i++) {
        let current = str.charAt(i);
        if (hash[current]) {
            let topElement = stack.length === 0 ? "#" : stack.pop();
            if (topElement !== hash[current]) {
                return false;
            }
        } else {
            // if opening bracket
            stack.push(current);
        }
    }
    return stack.length === 0;
}

console.log(validParentheses("{}[]()"), true)
console.log(validParentheses("{}[()"), false)
console.log(validParentheses("({[]})"), true)
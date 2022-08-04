/* 
big help from neetcode.io

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

/* 
Parameters: string
Return: boolean

*/

const isValid = s => {
    // if theres a parentheses, is the next character the correct closing kind?
    const stack = [];
    const matchClosedToOpen = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    };
    for (const p in s) {
        if (p in matchClosedToOpen) {
            // make sure it's not empty
            if (stack && stack[-1] === matchClosedToOpen[p]) {
                stack.pop();
            } else return false
        } else {
            stack.push[p];
        }
        if (!stack) {
            return true
        } else return false
    }
    // loop through string
    // if the character has its matched pair, remove it
    // otherwise add it to the stack
    // if the stack is empty return true
    // if the stack has any elements return false
}

console.log(isValid("()[]{}"), true)

// didn't get quite there yet.
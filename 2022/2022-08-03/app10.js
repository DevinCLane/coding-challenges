/* 
Valid parentheses

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

const validParentheses = s => {
    // store all the values in a stack
    const stack = [];
    // store the parentheses pairs in a hashmap
    const hash = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    for (let i = 0; i < s.length; i++) {
        let current = s.charAt(i);
        if (hash[current]) {
            const topElement = stack.length === 0 ? "#" : stack.pop();
            if (topElement !== hash[current]) {
                return false;
            }
        } else {
            stack.push(current);
        }
    }
    return stack.length === 0; 
}

console.log(validParentheses('()[]{}'), true)
console.log(validParentheses('()[{}'), false)
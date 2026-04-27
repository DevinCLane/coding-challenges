/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Parameters: string
Return: boolean
Example: 
Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

*/

const isValid = s => {
    // store string values in a stack
    const stack = [];
    // store key value pairs in a hashmap
    const hash = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    // if there's no string, return false
    if (!s) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        let current = s.charAt(i);
        // if there's a closing bracket
        if (hash[current]) {
            // give us the top element if there's anything in the stack
            const topElement = stack.length === 0 ? "#" : stack.pop()
                if (topElement !== hash[current]) {
                    return false;
                }
            } else { 
            // if there's an opening bracket, add it to the stack
            stack.push(current)
        } 
    }
    return stack.length === 0;
}

console.log(isValid("()[]{}"), true)
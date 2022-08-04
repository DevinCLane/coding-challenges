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

/* 
Parameters: string
Return: boolean

*/

// create a stack to store values
// create a hashmap to store key value pairs (we are looking to see if a closing parens has an opening one
// check the values
// remove if they match
// if the stack is empty return true
// otherwise return false

const isValid = s => {
    const stack = [];
    const hashMap = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    if (!s) return false;
    
    for (let i = 0; i < s.length; i++) {
        const currentValue = s.charAt(i);
        // if we are on a closing bracket
        if (hashMap[currentValue]) {
            // if there's a matching pair, pop it off the stack
            // or if stack is empty, assign a # to the top element
            const topElement = stack.length === 0 ? '#' : stack.pop()
            if (topElement !== hashMap[currentValue]) {
                return false;
            }
            // if there's an opening bracket
        } else {
            stack.push(currentValue);
        }
    }
    // return true or false if the stack is 0
    return stack.length === 0
}

console.log(isValid("()[]{}"), true)
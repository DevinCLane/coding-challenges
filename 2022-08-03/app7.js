/* 
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
    // store all the values here, and remove them if we find matching pairs
    // if there's something left in the stack at the end, it's false
    // empty, then it's true
    const stack = [];
    // every closing should have an opening parentheses
    const hash = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i = 0; i < s.length; i++) {
        let current = s.charAt(i);
        // if we see a closing parentheses
        if (hash[current]) {
            // look to the top element
            let topElement = stack.length === 0 ? '#' : stack.pop();
            // if the top element is not a matching opening parentheses
            // then it's false
            if (topElement != hash[current]) {
                return false;
            }
        // if we have an opening parentheses, push it to the stack
        } else stack.push(current)
    }
    // if the stack is empty, it's true, otherwise false
    return stack.length === 0;
}

console.log(validParentheses('[](){}'), true)
console.log(validParentheses('](){}'), false)
console.log(validParentheses('([{}])'), true)
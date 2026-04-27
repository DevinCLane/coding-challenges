/* 
Valid parentheses

given a string of ([{}]), return true if every opening has a closing, and they're in the correct order

e.g., {[]} true
)()(, false
*/

const validParentheses = s => {
    // create stack to store the values
    const stack = []
    // create hashmap: every closing should have an opening pair
    const hash = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    // if there's no string return false
    if (!s) return false;
    for (let i = 0; i < s.length; i++) {
        const current = s.charAt(i)
        // if we have a closing parentheses, do we have a matching opening one?
        if (hash[current]) {
            // what's the top element on the stack?
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== hash[current]) {
                return false;
            }
            // if we have an opening parens add it to the stack
        } else stack.push(current);
    }
    // if there's nothing left, all parens have matches
    return stack.length === 0;
}

console.log(validParentheses("()[]{}"), true)
console.log(validParentheses("({})"), true)
console.log(validParentheses(")[{}"), false)
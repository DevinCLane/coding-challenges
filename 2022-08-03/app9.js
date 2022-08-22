/* 
Valid parentheses
*/

const validParentheses = s => {
    const stack = [];
    const hash = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    if (!s) return false;

    for (let i = 0; i < s.length; i++) {
        const current = s.charAt(i);
        // if we have a closing parentheses
        if (hash[current]) {
            // what's the top element?
            const topElement = s.length === 0 ? "#" : stack.pop();
            // if the top element isn't a proper opening parentheses, it's false
            if (topElement !== hash[current]) {
                return false;
            }
        // if we have an opening parentheses
        } else {
            stack.push(current);
        }
    }
    return stack.length === 0;
}

console.log(validParentheses("()[]{}"), true)
console.log(validParentheses("(]{}"), false)
console.log(validParentheses("{[()]}"), true)
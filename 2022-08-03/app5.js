/* 
Valid parentheses

Given input string of either "(" ")" "{" "}" "[" "]" 
return true if every opening has a closing, and if they're in the right order

e.g.: "(){}[]" true
")" false
*/

const validParentheses = s => {
    const stack = [];
    const hashMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    if (!s) return false;

    for (let i = 0; i < s.length; i++) {
        const current = s.charAt(i);
        // if closing parens
        if (hashMap[current]) {
            // what's the top element?
            const topElement = stack.length === 0 ? "#" : stack.pop();
            // if there isn't a opening parentheses to match
            if (topElement !== hashMap[current]) {
                return false
            }
        }
        // if we have an opening parentheses
        else stack.push(current)
    }
    return stack.length === 0;
}

console.log(validParentheses("()[]{}"), true)
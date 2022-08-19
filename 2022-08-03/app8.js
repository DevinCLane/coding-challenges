/* 
Valid parentheses

Given a string of ()[]or {}
Return true if every opening has a closing, e.g. ()
and if they're in the right order, e.g., {[]}

Ex: {[()]}, true
}{[]} false
*/

const validParentheses = s => {
    // store our string values here
    // remove them as we find matches, if it's empty at the end true, otherwise false
    const stack = []
    const hash = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    if (!s) return false;

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

console.log(validParentheses("()[]{}"), true)
console.log(validParentheses("()[}"), false)
console.log(validParentheses("({[]})"), true)
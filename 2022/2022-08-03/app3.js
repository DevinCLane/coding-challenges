/* 
Valid parentheses

Given a string of () {} or []
Return true or false
every opening must have a closing
they must go in the right order

true: (());
([])
()[]

false:
)
)()()(
*/

const isValid = s => {
    const stack = []
    const hashMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    if (!s) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        let current = s.charAt(i);
        // check for a closing bracket
        if (hashMap[current]) {
            // get the top element of the stack
            const topElement = stack.length === 0 ? "#" : stack.pop()
            // if there's no opening bracket to match this closing bracket, return false
            if (topElement !== hashMap[current]) {
                return false;
            }
        } else {
            // if it's an opening bracket
            stack.push(current)
        }
    }
    // if there's nothing left, that means each bracket matches
    // if there's something left, we didn't have matching pairs
    return stack.length === 0;
}

console.log(isValid("()[]{}"), true)
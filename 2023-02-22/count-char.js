/* 
Create a hash map counting all the characters in a string
*/

const countChar = str => {
    const map = {}
    for (const char of str) {
        map[char] = ++map[char] || 1
    }
    return map
}

console.log(countChar('hello'), { 'h': 1, 'e': 1, 'l': 2, 'o': 1})
console.log(countChar('goodbye'), { 'g': 1, 'o': 2, 'd': 1, 'b': 1, 'y': 1, 'e': 1})
/* 
Create a hash map counting all the characters in a string
*/

const countChar = str => {
    const map = {}
    for (const char of str) {
        map[char] = map[char] + 1 || 1
    }
    return map
}

console.log(countChar("mississippi"))
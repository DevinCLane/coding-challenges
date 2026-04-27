/* 
Create a hash map counting all the characters in a string
*/

const countCharInStr = str => {
    const charMap = {}
    for (const char of str) {
        charMap[char] = ++charMap[char] || 1
    }
    return charMap
}

console.log(countCharInStr("hello"), {'h': 1, 'e': 1, 'l': 2, 'o': 1})
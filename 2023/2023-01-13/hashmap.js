/* 

Create a hash map counting all the characters in a string
*/

function hashMap(str) {
    const hashMap = {}
    for (const char of str) {
        hashMap[char] = hashMap[char] + 1 || 1
    }
    return hashMap
}

console.log(hashMap("hello"), {'h': 1, 'e': 1, 'l': 2, 'o': 1})
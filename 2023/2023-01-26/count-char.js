/* 
Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

const countChar = str => {
    const hashMap = {}
    for (const char of str) {
        hashMap[char] = ++hashMap[char] || 1
    }
    return hashMap
}

console.log(countChar('aba',  ), {'a': 2, 'b': 1})
console.log(countChar('hello',), {'h': 1, 'e': 1, 'l': 2, 'o': 1})

// another way
const countChar2 = str => {
    const hashMap = {}
    for (const char of str) {
        if (hashMap[char]) {
            hashMap[char]++
        } else {
            hashMap[char] = 1
        }
    }
    return hashMap
}

console.log(countChar2('aba',  ), {'a': 2, 'b': 1})
console.log(countChar2('hello',), {'h': 1, 'e': 1, 'l': 2, 'o': 1})
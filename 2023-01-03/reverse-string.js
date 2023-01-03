/* 
Reverse String

Given a string of characters as input, write a function that returns it with the characters reversed.
No Reverse Method (well brute force it first, but then no reverse method)!
*/

// brute force
const reverseString = str => {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello'), 'olleh')
console.log(reverseString('goodbye'), 'eybdoog')

// using a reverse for loop

const reverseString2 = str => {
    let result = ''
    for (let i = str.length; i >= 0; i--) {
        result += str.charAt(i)
    }
    return result;
}

console.log(reverseString2('hello'), 'olleh')
console.log(reverseString2('goodbye'), 'eybdoog')

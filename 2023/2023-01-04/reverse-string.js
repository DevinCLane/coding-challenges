/* 
Reverse String

Given a string of characters as input, write a function that returns it with the characters reversed.
No Reverse Method (well brute force it first, but then no reverse method)!
*/

// chained methods

const reverseString = str => {
    return str.split('').reverse().join('')
}

console.log(reverseString('hello'), 'olleh')
console.log(reverseString('goodbye'), 'eybdoog')

// reverse for loop
const reverseString2 = str => {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result;
}

console.log(reverseString2('hello'), 'olleh')
console.log(reverseString2('goodbye'), 'eybdoog')

// for of loop
const reverseString3 = str => {
    let result = ''
    for (const char of str) {
        result = char + result;
    }
    return result;
}

console.log(reverseString3('hello'), 'olleh')
console.log(reverseString3('goodbye'), 'eybdoog')

// with reduce
const reverseString4 = str => {
    return [...str].reduce((acc, curr) => curr + acc, '')
}

console.log(reverseString4('hello'), 'olleh')
console.log(reverseString4('goodbye'), 'eybdoog')
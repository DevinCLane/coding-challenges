/* 
Reverse String

Given a string of characters as input, write a function that returns it with the characters reversed.
No Reverse Method (well brute force it first, but then no reverse method)!
*/

const reverseString = str => {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i]
    }
    return result;
}

console.log(reverseString('hello'), 'elloh')
console.log(reverseString('goodbye'), 'eybdoog')

const reverseString2 = str => {
    return str.split('').reduce((acc, curr) => curr + acc, '')
}

console.log(reverseString('hello'), 'elloh')
console.log(reverseString('goodbye'), 'eybdoog')
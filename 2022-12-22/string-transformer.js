/* 
String transformer

Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.
For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

https://www.codewars.com/kata/5878520d52628a092f0002d0/
*/

const stringTransformer = str => {
    // reverse the order of the words
    // split the string by spaces, then reverse
    // reverse the case of the letter
    // split the words by '', if it's the same as the letter toLowerCase(), to UpperCase, otherwise put toLowerCase()
    // join as a string again, return
    const reversedWords = str.split(' ').reverse().join(' ')
    return reversedWords
            .split('')
            .map(value => value === value.toLowerCase() ? value.toUpperCase() : value.toLowerCase())
            .join('')
}

console.log(stringTransformer("Example Input"), "iNPUT eXAMPLE")
console.log(stringTransformer("loOK at ME"), "me AT LOok")
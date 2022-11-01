/* 
Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.

*/

// reverse the capitalization --> lowercase to uppercase, vice verse
// reverse the words in the string. 
// the words will be separated by spaces

const transformString = str => {
    // split the string using the space, gives us different words per element
    // if we just do split(''), this splits individual characters. split(' ') gives us each word as an array element
    // map over the array, if (l === l.toUpperCase() ? then we make it lower case : else make uppercase
    const reversedString = str.split(' ').reverse().join(' ')
    const transformedString = reversedString.split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')
    return transformedString
}

console.log(transformString("Example Input"), "iNPUT eXAMPLE")
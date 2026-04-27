/* 
Sort by last char

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

All inputs will be valid.

e.g.,
last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
*/

const lastChar = str => {
    // create an array of the input string
    // sort by last character; access the last character using the sort callback function, a.length - 1. 
    // when we compare the two strings, we can't just compare 'a' and 'b', because with the callback function, is 'a' > 'b'? we won't get an appropriate answer
    // instead, we need to convert these to numbers to compare them.
    // we can use `charCodeAt()` or `localeCompare`.
    // if we use charCodeAt(), we'd write `a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)` as our callback
    return str.split(' ').sort((a, b) => a.charAt(a.length - 1).localeCompare(b.charAt(b.length - 1)))

}

console.log(lastChar('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(lastChar('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
console.log(lastChar('take me to semynak'), ['take', 'me', 'semynak', 'to'])
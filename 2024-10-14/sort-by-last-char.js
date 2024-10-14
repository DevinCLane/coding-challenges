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

/**
 *
 * @param {string} str - the phrase we are sorting
 * @returns {Array} - the array of strings sorted by the last character
 */

const sortByLastChar = (str) => {
    return str.split(" ").sort(
        // using char code gives us an actual number to compare
        // doesn't work if you just compare the characters directly
        (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    );
};

console.log(sortByLastChar("man i need a taxi up to ubud"), [
    "a",
    "need",
    "ubud",
    "i",
    "taxi",
    "man",
    "to",
    "up",
]);
console.log(sortByLastChar("what time are we climbing up the volcano"), [
    "time",
    "are",
    "we",
    "the",
    "climbing",
    "volcano",
    "up",
    "what",
]);
console.log(sortByLastChar("take me to semynak"), [
    "take",
    "me",
    "semynak",
    "to",
]);

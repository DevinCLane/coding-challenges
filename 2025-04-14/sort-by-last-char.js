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

// function sort by last char
// split into an array
// sort => callback calls to compare the last character of a to the last character of b
// use charcode at to compare so that we are comparing numbers

/**
 *
 * @param {string} x
 * @returns {string[]}
 */
const sortByLastChar = (x) => {
    return x
        .split(" ")
        .sort(
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

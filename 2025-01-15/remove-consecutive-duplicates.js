/* 
Remove consecutive duplicate words string

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
*/

/**
 *
 * @param {string} str - the string that we are working on
 * @returns {string} - the string with consecutive duplicates removed
 */
const removeDupliates = (str) => {
    return str
        .split(" ")
        .filter((value, index, array) => value !== array[index - 1])
        .join(" ");
};

console.log(
    removeDupliates(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    ),
    "expect: alpha beta gamma delta alpha beta gamma delta"
);

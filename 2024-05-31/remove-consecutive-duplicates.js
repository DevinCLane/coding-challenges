/* 
Remove consecutive duplicate words string

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
*/

/**
 *
 * @param {string} string
 * @returns {string}
 */

const removeConsecutiveDuplicates = (string) => {
    return string
        .split(" ")
        .filter((value, index, array) => value !== array[index - 1])
        .join(" ");
};

console.log(
    removeConsecutiveDuplicates(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    ),
    "alpha beta gamma delta alpha beta gamma delta"
);
console.log(
    removeConsecutiveDuplicates(
        "alpha alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta delta"
    ),
    "alpha beta gamma delta alpha beta gamma delta"
);

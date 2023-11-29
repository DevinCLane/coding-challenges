/* 
Remove consecutive duplicate words string

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
*/

const removeConsecutiveDuplicates = (str) => {
    // split into an array
    // take a word, delete the next words if they're the same, but return once you see a different word
    // filter the array, value !== value next to it
    return str
        .split(" ")
        .filter((value, index, array) => value !== array[index + 1])
        .join(" ");
};

console.log(
    removeConsecutiveDuplicates(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    ),
    "alpha beta gamma delta alpha beta gamma delta"
);

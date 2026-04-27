/* 
Remove consecutive duplicate words string

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
*/

const removeConsecutiveDuplicateWords = (str) => {
    // convert to array, filter value !== arr[i - 1]
    return str
        .split(" ")
        .filter((value, index, array) => value !== array[index - 1])
        .join(" ");
};

console.log(
    removeConsecutiveDuplicateWords(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    ),
    "result: alpha beta gamma delta alpha beta gamma delta"
);

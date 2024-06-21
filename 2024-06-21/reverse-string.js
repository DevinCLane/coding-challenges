/* 

Reverse String

Given a string of characters as input, write a function that returns it with the characters reversed.
No Reverse Method (well brute force it first, but then no reverse method)!
*/

// brute force / reverse method
/**
 *
 * @param {string} str
 * @returns string
 */
const reverseString = (str) => {
    return str.split("").reverse().join("");
};

console.log(reverseString("hello"), "elloh");
console.log(reverseString("goodbye"), "eybdoog");

// using reduce
/**
 *
 * @param {string} str
 * @returns string
 */
const reverseString2 = (str) => {
    return str.split("").reduce((acc, curr) => (curr += acc), "");
};

console.log(reverseString2("hello"), "elloh");
console.log(reverseString2("goodbye"), "eybdoog");

// using a for loop
/**
 *
 * @param {string} str
 * @returns string
 */
const reverseString3 = (str) => {
    // go backwards across the string, add each letter to the result
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};

console.log(reverseString3("hello"), "elloh");
console.log(reverseString3("goodbye"), "eybdoog");

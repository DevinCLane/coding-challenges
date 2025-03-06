/* 
Reverse String

Given a string of characters as input, write a function that returns it with the characters reversed.
No Reverse Method (well brute force it first, but then no reverse method)!
*/

/**
 *
 * @param {string} str
 * @returns {string}
 */
const reverseString = (str) => {
    return str.split("").reverse().join("");
};

console.log(reverseString("hello"), "olleh");
console.log(reverseString("goodbye"), "eybdoog");

/**
 *
 * @param {string} str
 * @returns {string}
 */
const reverseString2 = (str) => {
    let result = "";
    // start at the end of the string
    // go backwards through the string
    for (let i = str.length - 1; i >= 0; i--) {
        // add to the result the current letter
        // o
        // ol
        // oll
        // olle
        // olleh
        result = result + str[i];
    }
    return result;
};

console.log(reverseString2("hello"), "olleh");
console.log(reverseString2("goodbye"), "eybdoog");

/**
 *
 * @param {string} str
 * @returns {string}
 */
const reverseString3 = (str) => {
    // take the accumulation of leters, and add the curent to the front
    // h
    // eh
    // leh
    // lleh
    // olleh
    return str.split("").reduce((acc, curr) => curr + acc, "");
};

console.log(reverseString3("hello"), "olleh");
console.log(reverseString3("goodbye"), "eybdoog");

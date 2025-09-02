/* 
String transformer

Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.
For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

https://www.codewars.com/kata/5878520d52628a092f0002d0/
*/

// create an array of each word, then reverse it and join again
// create an array of each character, then if it's lowercase, uppercase, if it's uppercase, lowercase

/**
 *
 * @param {string} str - input string
 * @returns {string} - output string
 */
function stringTransformer(str) {
    return str
        .split(" ")
        .reverse()
        .join(" ")
        .split("")
        .map((value) =>
            value === value.toLowerCase()
                ? value.toUpperCase()
                : value.toLowerCase()
        )
        .join("");
}

/* 
Time: O(n) where n is the length of the input string.
space: O(n) where n is the length of the input string

*/

console.log(stringTransformer("Example Input"), "iNPUT eXAMPLE");

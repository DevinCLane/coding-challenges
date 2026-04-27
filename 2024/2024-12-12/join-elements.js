/* 
Using recursion, write a function that inserts a given character between each character in an array. Don't add the character at the end.

example: joinElements(["s", "cr", "t cod", " :) :)"], "e") => "secret code :) :)"
*/

/**
 *
 * @param {string[]} arr - an array of strings
 * @param {string} joinString - the string we are inserting between each character in the array
 * @returns {string} - the resulting string with the join string inserted between each element
 */
const joinElements = (arr, joinString) => {
    const recurse = (result, index) => {
        result += arr[index];

        if (index === arr.length - 1) {
            return result;
        } else {
            return recurse(result + joinString, index + 1);
        }
    };
    return recurse("", 0);
};

console.log(
    joinElements(["s", "cr", "t cod", " :) :)"], "e"),
    "secret code :) :)"
);

/* 
Using recursion, write a function that inserts a given character between each character in an array. Don't add the character at the end.

example: joinElements(["s", "cr", "t cod", " :) :)"], "e") => "secret code :) :)"
*/

/**
 * joins array elements with a specified string between them
 * @param {string[]} arr - array of strings to join
 * @param {string} joinString - string to insert between elements
 * @returns {string} - joined string
 */
function joinElements(arr, joinString) {
    /**
     * recursively joins array elements with the join string
     * @param {number} index - current position in the array
     * @param {string} resultSoFar - accumulated string result
     * @returns {string} - final joined string
     */
    function recurse(index, resultSoFar) {
        resultSoFar += arr[index];

        if (index === arr.length - 1) {
            return resultSoFar;
        } else {
            return recurse(index + 1, resultSoFar + joinString);
        }
    }
    return recurse(0, "");
}

console.log(
    joinElements(["s", "cr", "t cod", " :) :)"], "e"),
    "secret code :) :)"
);

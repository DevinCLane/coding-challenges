/* 
Max Character
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 

*/

/**
 *
 * @param {string} str - the string from which we return the max occuring character
 * @returns {string} - the character that appears the most often
 */
const maxChar = (str) => {
    // create a hash map
    // track the max char
    // track the max count
    // track the count of all the characters in the string
    // if the current character count is greater than the max count, update the max count to the current count, and the max char to the current char
    // return the max char
    const map = {};
    let maxChar = null;
    let maxCount = 0;
    for (const char of str) {
        map[char] = map[char] + 1 || 1;
        if (map[char] > maxCount) {
            maxCount = map[char];
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(maxChar("Hello World!"), "l");
console.log(maxChar("goodbye"), "o");

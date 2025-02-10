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
 * @param {string} str
 * @returns {string}
 */
const maxChar = (str) => {
    // hash map to count the characters
    // max char variable
    // max count variable
    // if count is greater than max count, update max char and max count
    // return max char
    const map = {};
    let maxCount = 0;
    let maxChar = null;
    for (const char of str.toLowerCase()) {
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

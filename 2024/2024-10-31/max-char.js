/* 
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)!
*/

const maxChar = (str) => {
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

console.log(maxChar("hello"), "l");
console.log(maxChar("goodbye"), "o");

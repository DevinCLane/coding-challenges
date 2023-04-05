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

const maxChar = (str) => {
    const map = {};
    let maxChar = null;
    let charCount = 0;
    for (const char of str) {
        map[char] = map[char] + 1 || 1;
    }
    // console.log(map);
    for (const char in map) {
        if (map[char] > charCount) {
            charCount = map[char];
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(maxChar("hello"), "l");
console.log(maxChar("goodbye"), "o");

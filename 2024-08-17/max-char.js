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
    // hash map counting every string
    // variable to keep track of max char
    // variable to keep track of max count
    const charMap = {};
    let maxChar = null;
    let maxCount = 0;
    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1;
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(maxChar("hello"), "l");
console.log(maxChar("goodbye"), "o");

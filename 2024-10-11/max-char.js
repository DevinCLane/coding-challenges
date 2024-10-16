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
    const charMap = {};
    let maxCount = 0;
    let maxChar = null;
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

const maxChar2 = (str) => {
    const charMap = {};
    for (const char of str) {
        charMap[char] = ++charMap[char] || 1;
    }

    return Object.keys(charMap).reduce((acc, curr) =>
        charMap[acc] > charMap[curr] ? acc : curr
    );
};

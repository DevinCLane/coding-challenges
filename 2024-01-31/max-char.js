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
    let maxChar = undefined;
    let maxCount = 0;
    let charMap = {};
    for (const char of str) {
        charMap[char] = ++charMap[char] || 1;
    }
    for (const char in charMap) {
        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }
    return maxChar;
};

console.log(maxChar("hello world"), "l");
console.log(maxChar("goodbye world"), "o");

const maxChar2 = (str) => {
    let maxChar = undefined;
    let maxCount = 0;
    let charMap = {};
    for (const char of str) {
        charMap[char] = ++charMap[char] || 1;
    }
    return Object.keys(charMap).reduce((acc, curr) =>
        charMap[acc] > charMap[curr] ? acc : curr
    );
};

console.log(maxChar2("hello world"), "l");
console.log(maxChar2("goodbye world"), "o");

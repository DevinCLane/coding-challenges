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
    // create a cache
    // create max char
    // create max count
    // loop over the string
    const charMap = {};
    let maxChar;
    let maxCount = 0;
    let currentCount = 0;
    for (const char of str) {
        charMap[char] = ++charMap[char] || 1;
        currentCount = charMap[char];
        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(maxChar("hello world"), "l");
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

console.log(maxChar2("hello world"), "l");
console.log(maxChar2("goodbye"), "o");

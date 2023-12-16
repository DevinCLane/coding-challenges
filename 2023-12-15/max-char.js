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
    let maxChar;
    let maxCount = 0;
    const strMap = {};
    for (const char of str) {
        strMap[char] = ++strMap[char] || 1;
    }

    for (const char in strMap) {
        if (strMap[char] > maxCount) {
            maxCount = strMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(maxChar("hello world"), "l");
console.log(maxChar("goodbye"), "o");

const maxChar2 = (str) => {
    const strMap = {};
    for (const char of str) {
        strMap[char] = ++strMap[char] || 1;
    }

    return Object.keys(strMap).sort((a, b) => strMap[b] - strMap[a])[0];
};

console.log(maxChar2("hello world"), "l");
console.log(maxChar2("goodbye"), "o");

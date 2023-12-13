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

const maxCharacter = (str) => {
    // create a map of the characters
    // return the value with the largest number
    const map = {};
    for (const char of str) {
        map[char] = ++map[char] || 1;
    }
    return Object.keys(map).sort((a, b) => map[b] - map[a])[0];
};

console.log(maxCharacter("hello world"), "l");
console.log(maxCharacter("goodbye"), "o");

const maxCharacter2 = (str) => {
    const strMap = {};
    let maxChar = undefined;
    let maxCount = 0;
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

console.log(maxCharacter2("hello world"), "l");
console.log(maxCharacter2("goodbye"), "o");

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

const maxChar = str => {
    // hash map to count all the characters
    // variable to store the max character value
    // variable to store the max character key
    // loop over the hash map and ask, is this value bigger than the current max value? 
    // if so, update the max value to this value, update the max character to this character
    const charCount = {}
    let maxNum = 0
    let maxChar = null
    for (const char of str) {
        charCount[char] = ++charCount[char] || 1
    }
    for (const char in charCount) {
        if (charCount[char] > maxNum) {
            maxNum = charCount[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxChar('hello'), 'l')
console.log(maxChar('goodbye'), 'o')
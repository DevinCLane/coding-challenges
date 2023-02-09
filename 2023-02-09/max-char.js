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

function maxChar(str) {
    // hash map
    // create variable for maxChar
    // variable for the count
    const map = {}
    let maxChar = str[0]
    let maxCount = 0
    for (const char of str) {
        map[char] = map[char] + 1 || 1
    }
    for (const char in map) {
        if (map[char] > maxCount) {
            maxCount = map[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxChar('hello'), 'l')
console.log(maxChar('goodbye'), 'o')
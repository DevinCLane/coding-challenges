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
    const hashMap = {}
    let maxChar = null
    let maxCount = 0
    for (const char of str) {
        hashMap[char] = hashMap[char] + 1 || 1
    }
    for (const char in hashMap) {
        if (hashMap[char] > maxCount) {
            maxChar = char
            maxCount = hashMap[char]
        }
    }
    return maxChar
}

console.log(maxChar("hello"), 'l')
console.log(maxChar("goodbye"), 'o')
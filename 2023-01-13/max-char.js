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
    const strMap = {}
    let maxChar = ''
    let maxCount = 0
    let count = 0
    for (const char of str) {
        strMap[char] = ++strMap[char] || 1;
    } 
    console.log(strMap)
    for (const char in strMap) {
        if (strMap[char] > strMap[maxChar]) {
            maxChar = char
        }
    }
    return maxChar
}

console.log(maxChar("hello"), 'l')
console.log(maxChar("goodbye"), 'o')
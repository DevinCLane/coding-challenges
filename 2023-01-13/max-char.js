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
    for (const char of str) {
        strMap[char] = ++strMap[char] || 1;
    } 
    for (const char in strMap) {
        if (strMap[char] > strMap[maxChar]) {
            maxChar = strMap[char]
        }
    }
    return maxChar
}

console.log(maxChar("hello"), 'l')
console.log(maxChar("goodbye"), 'o')

// let's add some extra variables for readability

const maxChar2 = str => {
    const strMap = {}
    let maxChar = null
    let maxCount = 0
    for (const char of str) {
        strMap[char] = ++strMap[char] || 1;
    } 
    for (const char in strMap) {
        if (strMap[char] > maxCount) {
            maxCount = strMap[char]
            maxChar = char;
        }
    }
    return maxChar
}

console.log(maxChar2("hello"), 'l')
console.log(maxChar2("goodbye"), 'o')
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
    // hash map
    // variable to store the max character
    // variable to store the count
    // update as one is larger
    const map = {}
    let count = 0
    let maxChar = null
    for (const char of str) {
        map[char] = map[char] + 1 || 1
    } 
    for (const char in map) {
        if (map[char] > count) {
            count = map[char]
            maxChar = char
        }
    }
    return maxChar  
}

console.log(maxChar("Hello World!"), "l")
console.log(maxChar("Gooooooooodbye!"), "o")
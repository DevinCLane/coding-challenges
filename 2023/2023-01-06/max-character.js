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

const maxCharacter = str => {
    // create a hash map to count the occurances of each letter
    const strMap = {}
    for (const char of str) {
        strMap[char] = ++strMap[char] || 1;
    }
    // define where we'll store our largest character
    let biggest = ''
    for (const char in strMap) {
        // if the current letter is larger (has more instances) than the currently stored biggest, update it
        if (strMap[char] > strMap[biggest]) {
            biggest = strMap[char]
        }
    }
    return biggest;
}

console.log(maxCharacter("Hello World!"), "l")
console.log(maxCharacter("byeeeeeee"), "e")
/* 
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 

from:
https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
*/

const maxCharacter = str => {
    const map = {}
    for (const letter of str.toLowerCase()) {
        if (map[letter]) {
            map[letter]++
        } else {
            map[letter] = 1;
        }
    }
    return Object.keys(map).reduce((acc, curr) => map[acc] > map[curr] ? acc : curr, 0)
}

console.log(maxCharacter("Hello World"), "l")


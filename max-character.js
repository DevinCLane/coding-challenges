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
    // create a map to store our values
    const map = {}
    // loop over the string and create our map of values counting letter occurances
    for (const letter of str.toLowerCase()) {
        if (map[letter]) {
            map[letter]++
        } else {
            map[letter] = 1;
        }
    }
    // use object.keys to get an array of our key names (['h', 'e', 'l'...etc])
    // then use reduce to look at each key and ask, is this number bigger than the current? if so return the acc, otherwise return the curr key
    return Object.keys(map).reduce((acc, curr) => map[acc] > map[curr] ? acc : curr, 0)
}

console.log(maxCharacter("Hello World"), "l")


// another approach

const maxCharacter2 = str => {
    const charMap = {}
    let count = 0,
        maxChar = null;
        
    // create the character map of the string
    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // use a for in loop to loop over iterable properties
    // use count to store the highest count of numbers
    for (const char in charMap) {
        if (charMap[char] > count) {
            // update count with the new character number if it's the biggest
            count = charMap[char]
            // update the maxChar with the newest biggest character
            maxChar = char
        }
    }
    return maxChar
        

}

console.log(maxCharacter2('Hello World'), 'l')

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
    // then use reduce to look at each key and ask, is this number bigger than the current? if so return the acc key name (the letter), otherwise return the curr key name
    return Object.keys(map).reduce((acc, curr) => map[acc] > map[curr] ? acc : curr, 0)
}

console.log(maxCharacter("Hello World"), "l")


// another approach

const maxCharacter2 = str => {
    const charMap = {}
    // this will store the highest value of letter occurance
    let count = 0,
        // this will store the character associated with that highest value
        maxChar = null;
        
    // create the character map of the string
    for (const char of str) {
        // interestingly here if you write charMap[char]++, it doesn't work. Need to write ++charMap[char]
        charMap[char] = charMap[char] + 1 || 1;
    }

    // use a for in loop to loop over iterable properties
    for (const char in charMap) {
        // use count to store the highest count of numbers
        // update count with the new character number if it's the biggest
        if (charMap[char] > count) {
            count = charMap[char]
            // update the maxChar with the newest biggest character
            maxChar = char
        }
        // we don't do anything if the current letter in our map is lower than our current highest `count`
    }
    // return the letter assocated with the highest count
    return maxChar
}

console.log(maxCharacter2('Hello World'), 'l')

/* 
Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});
*/

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

//  brute force / quadratic time O(n * m)
const ransomNote = (note, magazine) => {
    // create an array, find the first word from the note, then pop it out
    const noteArray = note.split(' ')
    const magazineArray = magazine.split(' ')
    
    for (const word of noteArray) {
        if (magazineArray.includes(word)) {
            magazineArray.splice(magazineArray.indexOf(word), 1)
        } else return false;
    }
    return true;
}

console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)

// let's optimize a bit using a hash map

const ransomNote2 = (note, magazine) => {
    const magazineMap = {}
    // get rid of punctuation
    const punctuation = '.,'
    const magazineArrayClean = magazine.split('').filter(letter => punctuation.indexOf(letter) === -1).join('')
    const magazineArrayCleanIndividualWords = magazineArrayClean.split(' ')
    
    // create a hash map of every word in the magazine
    for (const word of magazineArrayCleanIndividualWords) {
        magazineMap[word] = magazineMap[word] + 1 || 1;
    }
    // check each word in the note to see if it's in the magazine
    // if it is, decrement the count in the hashmap
    // if it's not or at 0, return false
    // otherwise return true
    const noteArray = note.split(' ')
    for (const word of noteArray) {
        if (magazineMap[word]) {
            magazineMap[word] - 1
        };
        if (!magazineMap[word] || magazineMap[word] < 0) {
            return false;
        }
    }
    return true;
}

console.log(ransomNote2("sit ad est sint", magazine), true)
console.log(ransomNote2("sit ad est love", magazine), false)
console.log(ransomNote2("sit ad est sint in in", magazine), true)
console.log(ransomNote2("sit ad est sint in in in in", magazine), false)
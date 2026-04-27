/* 
Ransom note

Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)
*/

const magazine =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

/**
 *
 * @param {string} note
 * @param {string} magazine
 * @returns {boolean}
 */

const ransomNote = (note, magazine) => {
    const noteArr = note.split(" ");
    const magazineArr = magazine.split(" ");
    const magazineMap = {};

    // count all the words in the magazine array
    for (const word of magazineArr) {
        magazineMap[word] = magazineMap[word] + 1 || 1;
    }

    // cycle over the note
    for (const word of noteArr) {
        // is the note within the magazine?
        if (magazineMap[word]) {
            // reduce the count of the magazine word by one
            magazineMap[word]--;

            // did that make the word's count go below zero? then it's false
            if (magazineMap[word] < 0) return false;

            // did we not even have the word in the magazine? then it's false
        } else return false;
    }
    // otherwise it's true!
    return true;
};

// sit ad est sint
// for each word in the note, cycle over the magazine, if you find it, pop it off the magazine, if you get to the end, true

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

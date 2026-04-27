/* 
Ransom note

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

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
    // make a hash map counting occurences of each word
    // loop through the note. decrement count of each word from magazine. if we hit less than zero it's false, or if the word doesn't exist
    const magazineMap = {};
    // remove commas and periods
    const magazineArr = magazine
        .split(".")
        .join("")
        .split(",")
        .join("")
        .split(" ");
    const noteArr = note.split(" ");
    for (const word of magazineArr) {
        magazineMap[word] = magazineMap[word] + 1 || 1;
    }
    for (const word of noteArr) {
        if (magazineMap[word] === undefined) {
            return false;
        } else {
            magazineMap[word]--;
        }
        if (magazineMap[word] < 0) {
            return false;
        }
    }
    return true;
};

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

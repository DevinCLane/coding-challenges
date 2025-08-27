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
 * @param {string} note - the ransom note
 * @param {string} magazine - the magazine from which we cut words
 * @returns {boolean} - true/false if the note can be cut from the magazine
 */
function ransomNote(note, magazine) {
    const magazineMap = {};
    for (const word of magazine.split(" ")) {
        magazineMap[word] = (magazineMap[word] ?? 0) + 1;
    }
    for (const word of note.split(" ")) {
        if (magazineMap[word]) {
            magazineMap[word]--;
            if (magazineMap[word] < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}
// magazine of words, ransom note - strings
// return boolean true/false
// create a hash map of every word in the magazine and its frequency
// loop over the ransom note, and ask if it's in the magazine,
// if it's not, then it's false
// if it is then decrement the count from that magazine
// if the count goes below 0, then it's false
// otherwise it's true

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

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
 * @param {string} note - the string of words that we're trying to create
 * @param {string} magazine - the string of words from which we are trying to cut out the ransom note
 * @returns {boolean} - true/false if we can create the note from the magazine
 */

const removePunctuation = (str) => {
    return str
        .split("")
        .filter((letter) => letter !== "," && letter !== ".")
        .join("");
};

const ransomNote = (note, magazine) => {
    // filter out the commas in the magazine, make lower case
    const magazineMap = {};
    const noteArr = note.split(" ");
    const magazineArr = magazine
        .toLowerCase()
        .split(" ")
        .map(removePunctuation);
    // create a hash map to count ocurrance of each word in the magazine
    for (const word of magazineArr) {
        magazineMap[word] = ++magazineMap[word] || 1;
    }
    // loop over the note
    for (const word of noteArr) {
        // if the current word of the note is in the magazine, subtract the count from the magazine map
        if (magazineMap[word]) {
            magazineMap[word]--;
            // if the count is less than 0, return false
            if (magazineMap[word] < 0) {
                return false;
            }
            // if the word from the note is not in the magazine map, return false
        } else return false;
    }
    // return true if we make it past all of that
    return true;
};

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

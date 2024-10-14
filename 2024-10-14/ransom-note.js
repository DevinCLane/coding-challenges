/* 

Ransom note

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(ransomNote("sit ad est sint", magazine), true)
console.log(ransomNote("sit ad est love", magazine), false)
console.log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)Ransom note

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

const removePunctuation = (word) => {
    return word
        .split("")
        .filter((char) => char !== "." && char !== ",")
        .join("");
};

/**
 *
 * @param {string} note - the ransom note that we are trying to create from the magazine
 * @param {string} magazine - the magazine that contains all words that we can use to create a ransom note
 * @returns {boolean} - true/false if we can create the ransom note from the magazine
 */
const ransomNote = (note, magazine) => {
    // hash map of the frequency of words in the magazine
    // loop over the ransom note:
    // is the word in the magazine? if not, false, if so, reduce the count of that word in the magazine
    // if the count of that word in the magazine goes below 0, it's false
    // return true if we match all cases
    // return false if we don't get to enter these code blocks at all
    const magazineMap = {};
    const magazineArr = magazine
        .toLowerCase()
        .split(" ")
        .map(removePunctuation);

    for (const word of magazineArr) {
        magazineMap[word] = ++magazineMap[word] || 1;
    }

    for (const word of note.split(" ")) {
        if (magazineMap[word]) {
            magazineMap[word]--;
            if (magazineMap[word] < 0) {
                return false;
            }
        } else return false;
    }
    return true;
};

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

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

const removePunctuation = (word) => {
    return word
        .split("")
        .filter((char) => char !== "." && char !== ",")
        .join("");
};

/**
 *
 * @param {str} note - the ransom note we're trying to create
 * @param {*} magazine - the magazine from which we are trying to clip the ransom note
 * @returns {boolean} - true/false if we can create the ransom note from the magazine
 */
const ransomNote = (note, magazine) => {
    // hash map counting the occurrances of words in the magazine
    const magazineMap = {};
    const magazineArr = magazine
        .toLowerCase()
        .split(" ")
        .map(removePunctuation);
    for (const word of magazineArr) {
        magazineMap[word] = magazineMap[word] + 1 || 1;
    }

    // loop over the note, if it exists in the magazine hash map, reduce it by 1; if it doesn't exist it's false
    for (const word of note.split(" ")) {
        if (magazineMap[word]) {
            magazineMap[word]--;
            // if it falls below 0, then it's false
            if (magazineMap[word] < 0) {
                return false;
            }
        } else return false;
    }

    // otherwise it's true
    return true;
};

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

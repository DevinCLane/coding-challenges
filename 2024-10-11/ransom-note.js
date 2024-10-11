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

const ransomNote = (note, magazine) => {
    // could you take each word from the note, cut it out of the magazine, and create the note
    // count all the words in the magazine
    // loop over the magazine, if the word from the note doesn't exist in the magazine, return false
    // the word count of the word we're looking for from the note, in the magazine is 0 or less, return false
    // remove each word of the note from the magazine
    const magazineArray = magazine
        .toLowerCase()
        .split(" ")
        .map(removePunctuation);
    const magazineHash = {};

    for (const word of magazineArray) {
        magazineHash[word] = magazineHash[word] + 1 || 1;
    }

    for (const word of note.split(" ")) {
        if (magazineHash[word]) {
            magazineHash[word]--;
            if (magazineHash[word] < 0) {
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

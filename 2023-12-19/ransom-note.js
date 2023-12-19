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
 * @param {string} words
 * @param {string} magazine
 * @returns {boolean}
 */

const ransomNote = (words, magazine) => {
    // create a hashmap counting the appearances of words in the magazine
    // loop over the word array, if the word is in the magazine array, decrement the count in the hash map
    // if the count goes below zero, it's false
    // if the word isn't in the magazine array, it's false
    const wordsArr = words.split(" ");
    const magazineArr = magazine.split(" ");
    const magazineMap = {};

    for (const word of magazineArr) {
        magazineMap[word] = ++magazineMap[word] || 1;
    }
    for (const word of wordsArr) {
        if (magazineMap[word]) {
            magazineMap[word]--;
            if (magazineMap[word] < 0) return false;
        } else return false;
    }
    return true;
};

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);

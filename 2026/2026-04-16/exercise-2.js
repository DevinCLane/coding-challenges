/* 
given a list of words consisting of lowercase english letters and a complex word written in camelCase consisting of english letters
check if the complex word consists of words from the given list
*/

/**
 *
 * @param {string[]} words
 * @param {string} complexWord
 * @returns {boolean}
 */
function complexWord(words, complexWord) {
    let index = 0;
    for (const char of complexWord) {
        if (char === char.toUpperCase()) {
            break;
        }
        index++;
    }
    const lowerCase = complexWord.toLowerCase();
    const complexWordSplit = [
        lowerCase.slice(0, index),
        lowerCase.slice(index),
    ];
    return complexWordSplit.every((word) => words.includes(word));
    // loop over the word, find the uppercase character, split there
    // does the words array contain the first word
    // does the words array contain the second word
}

console.log(complexWord(["sea", "horse", "head", "strong"], "seaHorse"));
console.log(complexWord(["sea", "horse", "head", "strong"], "bigMan"));

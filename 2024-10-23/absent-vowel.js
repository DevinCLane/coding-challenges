/* 
Absent Vowel

Your job is to figure out the index of which vowel is missing from a given string:
A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
https://www.codewars.com/kata/56414fdc6488ee99db00002c
*/

/**
 *
 * @param {string} str - the string we are analyzing
 * @returns {number} - the index of the vowel that is missing.
 */
const absentVowel = (str) => {
    // loop over the vowels, for each vowel ask
    // if the string doesn't contain this vowel, return its index
    const vowels = "aeiou";
    for (const vowel of vowels) {
        if (!str.includes(vowel)) {
            return vowels.indexOf(vowel);
        }
    }
};

console.log(
    absentVowel("John Doe hs seven red pples under his bsket"),
    0,
    "missing: 'a'"
);
console.log(
    absentVowel("Bb Smith sent us six neatly arranged range bicycles"),
    3,
    "missing: 'o'"
);

/* 
https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

/* 
Parameters: string
Returns: true or false, if no repeating letters in input string
Example: "Dermatoglyphics" --> true
        "aba" --> false
*/

const isIsogram = string => {
    // count input letters
    // if a letter repeats, return false
    // else return true;
    const lettersCount = {};
    return string.toLowerCase().split('').every(letter => (lettersCount[letter] = lettersCount[letter] ? lettersCount[letter] + 1 : 1) <= 1);
}

// do a new one with Set

// a Set is an object that only contains unique values. Therefore, if a new Set of the input string has the same size as the input string,
// this means that there are no repeating characters. If the input string's length is longer than the Set, this means the input string has some
// repeating characters.
const isIsogramSet = string => {
    return new Set(string.toLowerCase()).size === string.length;
}

// test cases
console.log( isIsogram("Dermatoglyphics"), true );
console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"), false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true, "an empty string is a valid isogram" );
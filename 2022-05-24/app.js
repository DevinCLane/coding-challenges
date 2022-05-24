/* 
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

/* 
Parameters: string
Return: true or false, if it's a pangram
Example: "The quick brown fox jumps over the lazy dog." => true
*/

const pangram = string => {
    // set up the alphabet
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // convert string to lower case and then into array, 
    let arr = string.toLowerCase().split('');
    // on the alphabet array, run a function each time to return true or false.
    // we essentially ask: is "alphabet" a subset of "arr"? 
    // which is to say, does arr contain every letter in the alphabet?
    return alphabet.every(element => arr.includes(element));
}

console.log(pangram("The quick brown fox jumps over the lazy dog."), true);
console.log(pangram("The quick brown dog."), false);

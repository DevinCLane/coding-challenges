/* 

Palindrome: Write a function to check if a word is a palindrome
*/

const palindrome = (word) => {
    // if the reversed word is the same as the original word
    return (
        word.toLowerCase().split("").reverse().join("") === word.toLowerCase()
    );
};

console.log(palindrome("hello"), "false");
console.log(palindrome("racecar"), "true");
console.log(palindrome("goodbye"), "false");
console.log(palindrome("bob"), "true");

const palindrome2 = (word) => {
    // loop across the word until the halfway point
    // if each letter equals the complement position word[word.length - i], then it's true
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome2("hello"), "false");
console.log(palindrome2("racecar"), "true");
console.log(palindrome2("goodbye"), "false");
console.log(palindrome2("bob"), "true");

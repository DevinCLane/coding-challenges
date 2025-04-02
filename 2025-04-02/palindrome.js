/* 
Palindrome: Write a function to check if a word is a palindrome
*/

const palindrome = (word) => {
    return word.split("").reverse().join("") === word;
};

console.log(palindrome("string"), false);
console.log(palindrome("racecar"), true);
console.log(palindrome("bob"), true);
console.log(palindrome("mark"), false);

const palindrome2 = (word) => {
    // go across half the word, if it's equal to its complement then it's true
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome2("string"), false);
console.log(palindrome2("racecar"), true);
console.log(palindrome2("bob"), true);
console.log(palindrome2("mark"), false);

/* 
Palindrome: Write a function to check if a word is a palindrome
*/

const palindrome = (word) => {
    return word.split("").reverse().join("") === word;
};

console.log(palindrome("bob"), true);
console.log(palindrome("cat"), false);
console.log(palindrome("racecar"), true);

const palindrome2 = (word) => {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome2("bob"), true);
console.log(palindrome2("cat"), false);
console.log(palindrome2("racecar"), true);

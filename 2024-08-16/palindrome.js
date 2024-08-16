/* 
Palindrome: Write a function to check if a word is a palindrome
*/

// count halfway across the word, if each complement letter is the same, then it's a palindrome
// reverse the word. if the reversed word is the same as the original word then it's true
//
const palindrome = (str) => {
    return str.split("").reverse().join("") === str;
};

console.log(palindrome("hello"), false);
console.log(palindrome("bob"), true);
console.log(palindrome("racecar"), true);
console.log(palindrome("goodbye"), false);

const palindrome2 = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome2("hello"), false);
console.log(palindrome2("bob"), true);
console.log(palindrome2("racecar"), true);
console.log(palindrome2("goodbye"), false);

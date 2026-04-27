/* 
Palindrome: Write a function to check if a word is a palindrome
*/

const palindrome = (str) => {
    return str.split("").reverse().join("") === str;
};

console.log(palindrome("racecar"), true);
console.log(palindrome("bob"), true);
console.log(palindrome("cat"), false);
console.log(palindrome("tree"), false);

const palindrome2 = (str) => {
    // walk halfway across the string
    // if at any point the index doesn't equal the complement index, it's not a palindrome
    // i.e., str[i] === str[str.length - 1 - i]
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome2("racecar"), true);
console.log(palindrome2("bob"), true);
console.log(palindrome2("cat"), false);
console.log(palindrome2("tree"), false);

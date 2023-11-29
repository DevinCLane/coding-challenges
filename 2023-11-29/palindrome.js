/* 
Palindrome: Write a function to check if a word is a palindrome
*/

const palindrome = (str) => {
    // reverse the string
    // if the reversed string equal the original string, true
    return str.split("").reverse().join("") === str ? true : false;
};

console.log(palindrome("hello"), false);
console.log(palindrome("goodbye"), false);
console.log(palindrome("bob"), true);
console.log(palindrome("racecar"), true);

const palindrome2 = (str) => {
    // walk across half the string
    // if at any point the value doesn't equal its complement value (i.e., value - 1 - i), then it's not a palindrome
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome2("hello"), false);
console.log(palindrome2("goodbye"), false);
console.log(palindrome2("bob"), true);
console.log(palindrome2("racecar"), true);

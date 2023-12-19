/* 
Palindrome: Write a function to check if a word is a palindrome
*/

const palindrome = (str) => {
    return str === str.split("").reverse().join("");
};

console.log(palindrome("racecar"), true);
console.log(palindrome("bob"), true);
console.log(palindrome("cat"), false);
console.log(palindrome("tiger"), false);
console.log(palindrome("madam"), true);

const palindrome2 = (str) => {
    // loop over the array
    // if i !== the complement (i.e., i - 1 - str.length) then it's not a palindrome
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome2("racecar"), true, "palindrome 2");
console.log(palindrome2("bob"), true);
console.log(palindrome2("cat"), false);
console.log(palindrome2("tiger"), false);
console.log(palindrome2("madam"), true);

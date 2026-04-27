/* 
Palindrome: Write a function to check if a word is a palindrome

racecar 
bob
*/

const palindrome = (str) => {
    // check if reversed array equals the original array
    return str.split("").reverse().join("") === str ? true : false;
};

console.log(palindrome("racecar"), true);
console.log(palindrome("bob"), true);
console.log(palindrome("cat"), false);
console.log(palindrome("taco"), false);

const palindrome2 = (str) => {
    // step across half of the string. if any string does not equal the complement position character, it isn't a palindrome.
    // e.g., given "applesauce", "a"(str[i]) should equal "e" (text[text.length - 1 - i])
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome2("racecar"), true);
console.log(palindrome2("bob"), true);
console.log(palindrome2("cat"), false);
console.log(palindrome2("taco"), false);

/* 
Palindrome: Write a function to check if a word is a palindrome
*/

const palindrome = (word) => {
    // loop over the word
    // check if the first letter is equal to the negative value of that same index
    // ...e.g., word[1] === word[-1], word[2] === word[-2]
    // ...stopping at word[Math.floor(index/2)]
    let lowerCase = word.toLowerCase();
    for (let i = 0; i < lowerCase.length / 2; i++) {
        if (lowerCase[i] !== lowerCase[lowerCase.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(palindrome("racecar"), true);
console.log(palindrome("Boob"), true);
console.log(palindrome("apple"), false);
console.log(palindrome("Bob"), true);
console.log(palindrome("Nathan"), false);

const palindrome2 = (word) => {
    return (
        word.toLowerCase().split("").reverse().join("") === word.toLowerCase()
    );
};

console.log("palindrome 2");
console.log(palindrome2("racecar"), true);
console.log(palindrome2("Boob"), true);
console.log(palindrome2("apple"), false);
console.log(palindrome2("Bob"), true);
console.log(palindrome2("Nathan"), false);

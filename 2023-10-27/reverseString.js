/* 
Reverse String

Given a string of characters as input, write a function that returns it with the characters reversed.
No Reverse Method (well brute force it first, but then no reverse method)!
*/

// with reverse method first
const reverseString = (str) => {
    return str.split("").reverse().join("");
};

console.log(reverseString("hello"), "olleh");
console.log(reverseString("goodbye"), "eybdoog");

const reverseString2 = (str) => {
    // create a result string
    // for loop in reverse. push the items
    // h e l l o
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};

console.log(reverseString2("hello"), "olleh");
console.log(reverseString2("goodbye"), "eybdoog");

const reverseString3 = (str) => {
    // using .reduce
    return str.split("").reduce((acc, curr) => curr + acc, "");
};

console.log(reverseString3("hello"), "olleh");
console.log(reverseString3("goodbye"), "eybdoog");

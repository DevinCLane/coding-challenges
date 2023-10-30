/* 
Given a string of characters as input, write a function that returns it with the characters reversed.
No Reverse Method (well brute force it first, but then no reverse method)!
*/

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"), "olleh");
console.log(reverseString("goodbye"), "eybdoog");

function reverseString2(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

console.log(reverseString2("hello"), "olleh");
console.log(reverseString2("goodbye"), "eybdoog");

function reverseString3(str) {
    return str.split("").reduce((acc, curr) => curr + acc, "");
}

console.log(reverseString3("hello"), "olleh");
console.log(reverseString3("goodbye"), "eybdoog");

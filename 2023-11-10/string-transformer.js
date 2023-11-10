/* 

String transformer

Given a string, return a new string that has transformed based on the input:
Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.
For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

https://www.codewars.com/kata/5878520d52628a092f0002d0/
*/

const stringTransformer = (str) => {
    // change case
    // split into array by every character, reverse the case, join
    return str
        .split("")
        .map((value) =>
            value.toLowerCase() === value
                ? value.toUpperCase()
                : value.toLowerCase()
        )
        .join("")
        .split(" ")
        .reverse()
        .join(" ");
    // change word order
    // split into array by spaces, reverse the array
    //
};

console.log(stringTransformer("Example Input"), "iNPUT eXAMPLE");

/* 
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

https://www.codewars.com/kata/56414fdc6488ee99db00002c
*/

const absentVowel = str => {
    // string of vowels
    const vowels = 'aeiou';
    // looping through each 5 vowels, search the string to see if that vowel is there. if it's not, return the relevant index
    for (let i = 0; i < vowels.length; i++) {
        if (!str.includes(vowels[i])) {
            return i;
        }
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0) // missing: "a"
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3) // missing: "o"
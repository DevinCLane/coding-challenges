/* 
Absent Vowel

Your job is to figure out the index of which vowel is missing from a given string:
A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
https://www.codewars.com/kata/56414fdc6488ee99db00002c
*/

const absentVowel = str => {
    // every string will be missing a vowel
    // instructions say no need for string validation, do it anyway (could be a trap)
    // establish vowels, loop over them
    // ask the str, do you have the vowel? if not, return the index of that vowel
    const vowels = 'aeiou'
    const normalizeStr = str.toLowerCase()
    for (const vowel of vowels) {
        if (normalizeStr.indexOf(vowel) === -1) {
            return vowels.indexOf(vowel)
        }
    }
} 

console.log(absentVowel("John Doe hs seven red pples under his bsket"        ), 0, 'missing: "a"')
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3, 'missing: "o"')
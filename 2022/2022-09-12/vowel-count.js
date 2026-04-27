/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

/* 
parameters: string
return: integer number of vowels
e.g., "cat" -> 1; "engineer" -> 4
*/

const vowels = 'aeiou'

const vowelCount = str => {
    // define vowels
    // loop through string
    // if vowel, add
    // if not, continue
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const current = str.charAt(i);
        if (vowels.includes(current)) {
            count++
        }
    }
    return count;
}

console.log(vowelCount('hello'))
console.log(vowelCount('rhythm'))
console.log(vowelCount('apparition'))
/* 
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
 */

/* 
Parameters: string of letters, lowercase
Return: number of vowels
Example: (getCount("abracadabra"), 5) 
*/



function getCount(str) {
    let arr = str.split('');
    // if the string includes a vowel, add one to the count.
    return arr.filter(letter => 'aeiou'.includes(letter)).length
  }

// make it shorter
const countVowels = str => str.split('').filter(letter => 'aeiouAEIOU'.includes(letter)).length

// with a vanilla 'for' loop
function countVowelsForLoop(str) {
    let vowelCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) { // check letter of string against each vowel, then advance to next letter of string against each vowel, and so on...
                vowelCount++
            }
        }
    }
    return vowelCount
}

//   tests
console.log(getCount("abracadabra"), 5) 
console.log(countVowels("abracadabra"), 5) 
console.log(countVowelsForLoop("abracadabra"), 5) 
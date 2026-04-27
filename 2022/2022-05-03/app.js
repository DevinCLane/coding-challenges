/* 
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

/* My plan:

  split string into array at each space
  reverse each member of the array
  join, add spaces 
  */


/* initial code
notes: doesn't work.
returns: dog.lazytheoverjumpsfoxbrownquickThe
the word order is reversed, but each word is not */

/* function reverseWords(str) {
    let arr = str.split(' ')
    return arr.reverse().join('')
  } */


function reverseWords(str) {
    let eachWord = str.split(' ') // create an array with each word as a string
    let reverseWords = []; // store our result here
    for (let i = 0; i < eachWord.length; i++) { // loop over the array
        reverseWords.push(eachWord[i].split('').reverse().join('')) // go to each element in the array (which is a string), split that into a new array by each letter (we now have an array with each letter as a member), reverse that, join it back. we now have each word reversed as a string.
    }
    return reverseWords.join(' ') // join each member of the array back together as a string, preserving the spaces.
}

// tests
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
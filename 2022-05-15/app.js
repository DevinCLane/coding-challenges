/* 
https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

// prep
// Parameters: an array of words incoming. will always be words, not other types, no need to sanitize words.
// Return: a string of a sentence
// Example: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
    // add space to end each element of array, except last element of array
    for (let i = 0; i < words.length - 1; i++) {
        words[i] += ' ';
    }
    return words.join('');
}

// cleaning things up
const smashTogether = words => words.join(' '); 

// test cases
console.log(smash(["hello", "world"]), "hello world");
console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
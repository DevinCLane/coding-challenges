/* 
Check if a word is a palindrome

e.g., car => false
racecar => true

*/

const palindrome = str => {
    // if the reversed string is the same as the original string, return true
    return (str.split('').reverse().join('') === str) 
}

console.log(palindrome('car'), false)
console.log(palindrome('racecar'), true)
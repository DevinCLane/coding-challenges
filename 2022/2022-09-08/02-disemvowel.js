/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

/* 
parameters: string
return: string with no vowels
*/

// list vowels here

const vowels = 'aeiou'

const disemvowel = str => {
    // check each letter against the vowels
    // if they match, remove
    // if they don't, move on
    // return the new string
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        let current = str.charAt(i);
        if (!vowels.includes(current)) {
            newStr += current;
        }
    }
    return newStr;
}

console.log(disemvowel('hello'))
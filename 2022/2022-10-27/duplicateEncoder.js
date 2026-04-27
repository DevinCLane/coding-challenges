/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

const duplicateEncoder = str => {
    // lowercase the string
    let answer = ''
    const arr = str.toLowerCase().split('')
    // loop over the array
    for (const letter of arr) {
        // if the last index of a letter is the same as the index of the letter, there is no repetition
        if (arr.lastIndexOf(letter) === arr.indexOf(letter)) {
            answer += "("
            // letters that occur more than once
        } else answer += ")"
    }
    return answer
}

console.log(duplicateEncoder("din"), "(((")
console.log(duplicateEncoder("recede"), "()()()")
console.log(duplicateEncoder("Success"), ")())())")
console.log(duplicateEncoder("(( @"), "))((")

// using map()

const duplicateEncoder2 = str => {
    return str.toLowerCase()
        .split('')
        .map((l, i, a) => a.indexOf(l) === a.lastIndexOf(l) ? "(" : ")")
        .join('')
}

console.log(duplicateEncoder2("din"), "(((")
console.log(duplicateEncoder2("recede"), "()()()")
console.log(duplicateEncoder2("Success"), ")())())")
console.log(duplicateEncoder2("(( @"), "))((")
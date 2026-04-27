/* 
Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/


const duplicateEncoder = str => {
    return [...str.toLowerCase()].map((value, index, array) => {
        // indexOf(value) !== lastIndexOf(value) => return ")", else return (
            // could optimize as: array.indexOf(value) !== array.lastIndexOf(value) ? ")" : "("
        if (array.indexOf(value) !== array.lastIndexOf(value)) {
            return ")"
        } else return "("
    })
    .join('')
    // which characters are duplicates
    // create a new string
    // ) if duplicate, otherwise (
}

console.log(duplicateEncoder("din"), "(((")
console.log(duplicateEncoder("recede"), "()()()")
console.log(duplicateEncoder("Success"), ")())())")
console.log(duplicateEncoder("(( @" ), "))((")
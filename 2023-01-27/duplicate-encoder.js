/* 
Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

*/

function duplicateEncoder(str) {
    // if indexOf(char) === lastIndexOf(char), return ( otherwise )
    let result = ''
    for (const char of str.toLowerCase()) {
        str.indexOf(char) === str.lastIndexOf(char) ? result += '(' : result += ')'
    }
    return result;
}

console.log(duplicateEncoder("din"    ), "(((")
console.log(duplicateEncoder("recede" ), "()()()")
console.log(duplicateEncoder("Success"), ")())())")
console.log(duplicateEncoder("(( @"   ), "))((" )
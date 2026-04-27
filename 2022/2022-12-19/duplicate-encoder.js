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

const duplicateEncoder = str => {
    // to see if something repeats more than once we can ask does the indexOf(element) === lastIndexOf(element)
    // we could also consider a Set
    let result = ''
    for (const char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            result += "("
        } else result += ")"
    }
    return result;
}

console.log(duplicateEncoder("din"    ), "(((")
console.log(duplicateEncoder("recede" ), "()()()")
console.log(duplicateEncoder("Success"), ")())())")
console.log(duplicateEncoder("(( @"   ), "))((" )

// using map

const duplicateEncoder2 = str => {
    return [...str.toLowerCase()].map((value, index, array) => {
        return array.indexOf(value) === array.lastIndexOf(value) ? "(" : ")"
    })
    .join('')
}

console.log(duplicateEncoder2("din"    ), "(((")
console.log(duplicateEncoder2("recede" ), "()()()")
console.log(duplicateEncoder2("Success"), ")())())")
console.log(duplicateEncoder2("(( @"   ), "))((" )
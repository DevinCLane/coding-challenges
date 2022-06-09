/* 
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

/* 
parameters: string of two words with one space between them
return: string of two capital letters (first letter of each word) with one period between them

*/

const abbrevName = name => {
    let arr = name.split(' ');
    return arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase()
}

// using template literal

const abbrevNameTemplateLiteral = name => {
    let nameArray = name.split(' ');
    return `${nameArray[0][0]}.${nameArray[1][0]}`.toUpperCase();
}

// test cases

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");
console.log(abbrevNameTemplateLiteral("Sam Harris"), "S.H");
console.log(abbrevNameTemplateLiteral("Patrick Feenan"), "P.F");
console.log(abbrevNameTemplateLiteral("Evan Cole"), "E.C");
console.log(abbrevNameTemplateLiteral("P Favuzzi"), "P.F");
console.log(abbrevNameTemplateLiteral("David Mendieta"), "D.M");
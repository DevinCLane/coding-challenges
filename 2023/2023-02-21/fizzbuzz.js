/* 
Fizzbuzz

Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 3, print out “Fizz”; 
when it’s divisible by 5, print out “Buzz”; 
when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

function fizzBuzz(n) {
    // for loop
    // while our counter is less than or equal to n
    // if i % 3 === 0 and i % 5 === 0, print fizzbuzz
    // if i % 3 === 0, print fizz
    // if i % 5 === 0, print buzz
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    } 
}

console.log(fizzBuzz(16), '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16')
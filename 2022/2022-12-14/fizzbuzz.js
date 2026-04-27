/* 

Fizzbuzz

Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 3, print out “Fizz”; 
when it’s divisible by 5, print out “Buzz”; 
when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

const fizzBuzz = num => {
    for (let i = 1; i < num; ++i) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else console.log(i)
    } 
}

console.log(fizzBuzz(16), '1, 2, fizz, 4, buz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16')
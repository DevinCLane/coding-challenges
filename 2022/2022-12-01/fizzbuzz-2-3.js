/* 
Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 2, print out “Fizz”; 
when it’s divisible by 3, print out “Buzz”; 
when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

from https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038
*/

const fizzBuzz23 = n => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('buzz')
        } else if (i % 2 === 0) {
            console.log('fizz')
        } else console.log(i)
    }
}

console.log(fizzBuzz23(16), "1, fizz, buzz, fizz, 5, fizzbuzz, 7, fizz, buzz, fizz, 11, fizzbuzz, 13, fizz, buzz, fizz")
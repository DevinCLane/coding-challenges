/* 
Given a number as an input, print out every integer from 1 to that number.
However, when the integer is divisible by 3, print out “Fizz”; 
when it’s divisible by 5, print out “Buzz”; 
when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

const fizzBuzz = num => {
    const result = []
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('fizzbuzz')
        } else if (i % 3 === 0) {
            result.push('fizz')
        } else if (i % 5 === 0) {
            result.push('buzz')
        } else result.push(i)
    }
    return result;
}

console.log(fizzBuzz(16), "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16")
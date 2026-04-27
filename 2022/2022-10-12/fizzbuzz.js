/* 
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
*/

// integers, no floats, no negative numbers. 
// console log the value. log fizz if divisible by 3, log buzz if divisible by 5, fizzbuzz if both 3 and 5.

function fizzBuzz(nums) {
    for (let i = 1; i <= nums; i++) {
        // print fizzbuzz if number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
            // print fizz if divisibile by 3
        } else if (i % 3 === 0) {
            console.log('fizz')
            // print buzz if divisibile by 5
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
    // print from 1 until num
}

console.log(fizzBuzz(15), '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz')
/* 
Given a number i, print out every number from 1 to i with these exceptions:
if the number is divisible by 3, print fizz
if the number is divisible by 5, print buzz
if the number is divisible by 3 and 5, print fizzbuzz
*/

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

console.log(
    fizzBuzz(15),
    "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz"
);

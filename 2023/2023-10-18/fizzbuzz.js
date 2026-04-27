/* 
Given a number n, print every number from 1 to n
If the number is divisible by 3, print fizz
if the number is divisible by 5, print buzz
if the number is divisible by 3 and 5, print fizzbuzz
*/

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else console.log(i);
    }
};

fizzBuzz(15);
fizzBuzz(100);

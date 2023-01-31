/* 
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
*/

// for loops
const greatestCommonDivisor = (a, b) => {
    let greatest = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0 & b % i === 0) {
            greatest = i;
        }
    }
    return greatest 
}

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(220,40),20)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
/* 
Greatest Common Divisor
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
*/

// iterative approach, for loops
const greatestCommonDivisor = (x, y) => {
    // start at the smaller number, count down
    // if x % i and y % i === 0, we found it
    for (let i = Math.min(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i
        }
    }
}

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)

// recursive approach
const greatestCommonDivisor2 = (x, y) => {
    // euclidean algorithm says that GCD(x, y) = GCD(Q, R) where x = y * q + r; q = quotient, r = remainder
    // therefore we run GCD(x, y) as GCD(y, x % y)  until y === 0
    return y === 0 ? x : greatestCommonDivisor2(y, x % y)
}

console.log(greatestCommonDivisor2(30,12),6)
console.log(greatestCommonDivisor2(8,9),1)
console.log(greatestCommonDivisor2(1,1),1)
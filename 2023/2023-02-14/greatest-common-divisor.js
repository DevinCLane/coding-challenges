/* 
Greatest Common Divisor
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
*/
// for loops
const greatestCommonDivisor = (x, y) => {
    // start with smallest number, count down
    // if x and y % i are 0, we found it
    for (let i = Math.min(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i
        }
    }
}

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)

// with recursion
const greatestCommonDivisor2 = (x, y) => {
    // the Euclidean algorithm for GCD says gcd(x, y) = gcd(y, x % y)
    if (y === 0) {
        return x
    } else {
        return greatestCommonDivisor2(y, x % y)
    }
}

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
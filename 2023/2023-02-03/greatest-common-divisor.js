/* 
Greatest Common Divisor
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
*/

const greatestCommonDivisor = (x, y) => {
    // check which number is smaller
    // decrement
    // if x % i and x % y === 0, we found it
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
// this comes from the Euclidean algorithm for GCD
// GCD(x, y) = GCD(y, x % y)
// if y = 0, GCD(x, y) = x and vice versa
const greatestCommonDivisor2 = (x, y) => {
    if (y === 0) {
        return x;
    } else {
        // https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
        return greatestCommonDivisor2(y, x % y)
    }
}

console.log(greatestCommonDivisor2(30,12),6)
console.log(greatestCommonDivisor2(8,9),1)
console.log(greatestCommonDivisor2(1,1),1)
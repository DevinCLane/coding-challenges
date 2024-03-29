/* 
Greatest Common Divisor
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
*/

// iterative solution
const greatestCommonDivisor = (x, y) => {
    // if one goes into the other, that's the biggest
    for (let i = Math.min(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    }
    return "none found";
};

console.log(greatestCommonDivisor(30, 12), 6);
console.log(greatestCommonDivisor(8, 9), 1);
console.log(greatestCommonDivisor(1, 1), 1);

// recursive solution
const greatestCommonDivisor2 = (x, y) => {
    // Euclidean algorithm says gcd(x, y) === gcd(q, r)
    // where q is quotient (i.e., y), and r is remainder (i.e., x % y)
    // https://en.wikipedia.org/wiki/Euclidean_algorithm
    return y === 0 ? x : greatestCommonDivisor2(y, x % y);
};

console.log(greatestCommonDivisor2(30, 12), 6);
console.log(greatestCommonDivisor2(8, 9), 1);
console.log(greatestCommonDivisor2(1, 1), 1);

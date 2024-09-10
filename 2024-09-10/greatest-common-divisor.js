/* 
Greatest Common Divisor
Find the greatest common divisor of two positive integers.
The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

console.log(greatestCommonDivisor(30,12),6)
console.log(greatestCommonDivisor(8,9),1)
console.log(greatestCommonDivisor(1,1),1)
*/

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} - the greatest common divisor of x and y
 */

const greatestCommonDivisor = (x, y) => {
    // start at the smaller of the two values, count down
    // if x % i is 0 and y % i is zero, we found it
    for (let i = Math.min(x, y); i > 0; i--) {
        if (x % i === 0 && y % i === 0) {
            return i;
        }
    }
    return -1;
};

console.log(greatestCommonDivisor(30, 12), 6);
console.log(greatestCommonDivisor(8, 9), 1);
console.log(greatestCommonDivisor(1, 1), 1);

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number} - the greatest common divisor of x and y
 */

const greatestCommonDivisor2 = (x, y) => {
    // euclidean algorithm says gcd(x, y) = gcd(y, x % y)
    return y === 0 ? x : greatestCommonDivisor2(y, x % y);
};

console.log(greatestCommonDivisor2(30, 12), 6);
console.log(greatestCommonDivisor2(8, 9), 1);
console.log(greatestCommonDivisor2(1, 1), 1);

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
 * @param {number} x - first number
 * @param {number} y - second number
 * @returns {number} - the greatest divisor of both numbers
 */
const greatestCommonDivisor = (x, y) => {
    // loop downwards, starting from the lower of the two numbers
    // if x % i and y % i === 0 you found it
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
 * @param {number} x - first number
 * @param {number} y - second number
 * @returns {number} - the greatest divisor of both numbers
 */
const greatestCommonDivisor2 = (x, y) => {
    return y === 0 ? x : greatestCommonDivisor2(y, x % y);
};

console.log(greatestCommonDivisor2(30, 12), 6);
console.log(greatestCommonDivisor2(8, 9), 1);
console.log(greatestCommonDivisor2(1, 1), 1);
